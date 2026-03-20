export default {
  name: 'ticker',
  title: 'News Ticker',
  type: 'document',
  // Only one ticker document should exist
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'items',
      title: 'Ticker Headlines',
      description: 'These scroll across the top of every page. Keep each one short (under 80 characters).',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    prepare() {
      return { title: 'News Ticker Headlines' }
    },
  },
}
