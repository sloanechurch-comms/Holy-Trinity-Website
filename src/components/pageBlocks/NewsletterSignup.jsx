import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  firstName: z.string().min(1, 'Please enter your first name').max(60),
  email: z.string().email('Please enter a valid email address'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Please tick the box to confirm consent' }),
  }),
  hp: z.string().max(0).optional(),
});

export default function NewsletterSignup({ embedCode }) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema), defaultValues: { hp: '' } });

  if (embedCode) {
    return (
      <div className="bg-cream border border-border p-6 sm:p-8">
        <p className="text-sm text-mid mb-4">
          We use Mailchimp to send a weekly bulletin with service times, events, news, and reflections from the Rector.
          After signing up you will receive a confirmation email; click the link in it to complete your subscription.
        </p>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: embedCode }}
        />
      </div>
    );
  }

  async function onSubmit(data) {
    setServerError(null);
    if (data.hp && data.hp.length > 0) {
      setSubmitted(true);
      return;
    }
    try {
      // {/* TODO: Wire to Mailchimp embedded form action URL or API endpoint once Mailchimp is connected. */}
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
    } catch (err) {
      setServerError('Something went wrong. Please try again, or email parishoffice@sloanechurch.org.');
    }
  }

  if (submitted) {
    return (
      <div role="status" className="bg-cream border border-border p-6 sm:p-8">
        <h3 className="font-serif text-h3 text-crimson mb-2">Almost there</h3>
        <p className="text-ink">
          Please check your inbox for a confirmation email from us. Click the link in it to confirm your subscription. If you do not see it, look in your spam folder.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="bg-cream border border-border p-6 sm:p-8 max-w-xl"
      aria-labelledby="newsletter-heading"
    >
      <p className="text-sm text-mid mb-5">
        We use Mailchimp to send a weekly bulletin with service times, events, news, and reflections from the Rector.
        You can unsubscribe at any time. After signing up, please confirm your subscription via the email we send you.
        Read our{' '}
        <a href="/privacy" className="text-crimson">
          privacy policy
        </a>
        .
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="newsletter-firstName" className="block text-sm font-sans mb-1.5">
            First name
          </label>
          <input
            id="newsletter-firstName"
            type="text"
            autoComplete="given-name"
            className="w-full border border-border px-3 py-2 bg-white focus:border-crimson outline-none"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? 'newsletter-firstName-error' : undefined}
            {...register('firstName')}
          />
          {errors.firstName && (
            <p id="newsletter-firstName-error" className="text-sm text-crimson mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="newsletter-email" className="block text-sm font-sans mb-1.5">
            Email
          </label>
          <input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            className="w-full border border-border px-3 py-2 bg-white focus:border-crimson outline-none"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'newsletter-email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p id="newsletter-email-error" className="text-sm text-crimson mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            className="mt-1"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'newsletter-consent-error' : undefined}
            {...register('consent')}
          />
          <span>
            I would like to receive the Holy Trinity Sloane Square weekly bulletin. I understand I can unsubscribe at any time.
          </span>
        </label>
        {errors.consent && (
          <p id="newsletter-consent-error" className="text-sm text-crimson mt-1">
            {errors.consent.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from users; bots fill it in. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="newsletter-hp">Leave this field empty</label>
        <input id="newsletter-hp" type="text" tabIndex={-1} autoComplete="off" {...register('hp')} />
      </div>

      {serverError && (
        <p role="alert" className="text-sm text-crimson mt-4">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex items-center justify-center px-6 py-3 bg-crimson text-white font-serif text-base hover:bg-red disabled:opacity-60"
      >
        {isSubmitting ? 'Subscribing…' : 'Subscribe'}
      </button>
    </form>
  );
}
