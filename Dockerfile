# Dockerfile — production image. Multi-stage: build with node, serve with nginx.
# Vercel does its own build, so this file is only used if you want to host
# the static output somewhere else (e.g. Fly.io, a self-hosted server).

FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps --no-audit --no-fund
COPY . .
# Build args allow passing env vars at build time. Vite inlines VITE_*
# vars at build, so they must be present when `npm run build` runs.
ARG VITE_SANITY_PROJECT_ID
ARG VITE_SANITY_DATASET=production
ARG VITE_SANITY_API_VERSION=2026-05-16
ARG VITE_SITE_URL=https://htss.org
ARG VITE_GA4_MEASUREMENT_ID
ENV VITE_SANITY_PROJECT_ID=$VITE_SANITY_PROJECT_ID \
    VITE_SANITY_DATASET=$VITE_SANITY_DATASET \
    VITE_SANITY_API_VERSION=$VITE_SANITY_API_VERSION \
    VITE_SITE_URL=$VITE_SITE_URL \
    VITE_GA4_MEASUREMENT_ID=$VITE_GA4_MEASUREMENT_ID
RUN npm run build

FROM nginx:1.27-alpine AS runner
# SPA fallback: any unmatched route serves index.html so React Router can
# resolve it client-side.
RUN printf 'server {\n  listen 80;\n  root /usr/share/nginx/html;\n  index index.html;\n  location / {\n    try_files $uri /index.html;\n  }\n  location /admin {\n    add_header X-Robots-Tag "noindex, nofollow";\n    try_files $uri /index.html;\n  }\n}\n' > /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
