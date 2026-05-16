import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { scheduledPublishing } from '@sanity/scheduled-publishing';
import { schemaTypes } from '../studio/schemas/index.js';
import { projectId, dataset } from './client.js';

const structure = (S) =>
  S.list()
    .title('Holy Trinity Sloane Square')
    .items([
      S.listItem()
        .title('Worship')
        .child(
          S.list()
            .title('Worship')
            .items([
              S.documentTypeListItem('service').title('Services'),
            ]),
        ),
      S.listItem()
        .title('Events')
        .child(S.documentTypeList('event').title('Events').defaultOrdering([{ field: 'date', direction: 'asc' }])),
      S.listItem()
        .title('People')
        .child(
          S.list()
            .title('People')
            .items([
              S.documentTypeListItem('staff').title('Staff and clergy'),
              S.documentTypeListItem('pccMember').title('PCC members'),
            ]),
        ),
      S.listItem()
        .title('Governance')
        .child(
          S.list()
            .title('Governance')
            .items([
              S.listItem()
                .title('Patron')
                .child(
                  S.editor()
                    .id('patron')
                    .schemaType('patron')
                    .documentId('patron-singleton'),
                ),
              S.documentTypeListItem('pccMember').title('PCC members'),
            ]),
        ),
      S.documentTypeListItem('newsPost').title('News and notices'),
      S.documentTypeListItem('pageContent').title('Page content blocks'),
      S.listItem()
        .title('Site settings')
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('settings-singleton'),
        ),
    ]);

export const studioConfig = defineConfig({
  name: 'htss',
  title: 'Holy Trinity Sloane Square',
  projectId,
  dataset,
  basePath: '/admin',
  plugins: [structureTool({ structure }), visionTool(), scheduledPublishing()],
  schema: { types: schemaTypes },
});
