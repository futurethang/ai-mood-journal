/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/typography')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text)',
            '--tw-prose-headings': 'var(--text)',
            '--tw-prose-lead': 'var(--text)',
            '--tw-prose-links': 'var(--text)',
            '--tw-prose-bold': 'var(--text)',
            '--tw-prose-counters': 'var(--text)',
            '--tw-prose-bullets': 'var(--text)',
            '--tw-prose-hr': 'var(--text)',
            '--tw-prose-quotes': 'var(--text)',
            '--tw-prose-quote-borders': 'var(--text)',
            '--tw-prose-captions': 'var(--text)',
            '--tw-prose-code': 'var(--text)',
            '--tw-prose-pre-code': 'var(--text)',
            '--tw-prose-pre-bg': 'var(--text)',
            '--tw-prose-th-borders': 'var(--text)',
            '--tw-prose-td-borders': 'var(--text)',
            '--tw-prose-invert-body': 'var(--text)',
            '--tw-prose-invert-headings': 'var(--text)',
            '--tw-prose-invert-lead': 'var(--text)',
            '--tw-prose-invert-links': 'var(--text)',
            '--tw-prose-invert-bold': 'var(--text)',
            '--tw-prose-invert-counters': 'var(--text)',
            '--tw-prose-invert-bullets': 'var(--text)',
            '--tw-prose-invert-hr': 'var(--text)',
            '--tw-prose-invert-quotes': 'var(--text)',
            '--tw-prose-invert-quote-borders': 'var(--text)',
            '--tw-prose-invert-captions': 'var(--text)',
            '--tw-prose-invert-code': 'var(--text)',
            '--tw-prose-invert-pre-code': 'var(--text)',
            '--tw-prose-invert-pre-bg': 'var(--text)',
            '--tw-prose-invert-th-borders': 'var(--text)',
            '--tw-prose-invert-td-borders': 'var(--text)',
          },
        },
      },
    },
  },
}
