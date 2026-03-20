export default {
  name: 'mediaItem',
  title: 'Publication / Briefing / Knowledge Output',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author(s)',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'date',
      options: { dateFormat: 'MMMM D, YYYY' },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Publication', value: 'publication' },
          { title: 'Briefing', value: 'briefing' },
          { title: 'Knowledge Output', value: 'knowledge-output' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Summary / Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'file',
      title: 'Upload PDF',
      type: 'file',
      description: 'Upload the document PDF here, OR provide an external URL below.',
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      description: 'If the document is hosted elsewhere, paste the link here.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
    },
  },
}
