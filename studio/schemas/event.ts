export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      description: 'e.g. March 15-16, 2026 or November 2025',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'type',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          'Conference',
          'Seminar',
          'Dialogue',
          'Workshop',
          'Forum',
          'Summit',
          'Symposium',
          'Delegation',
        ],
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming Event', value: 'upcoming' },
          { title: 'Past Event', value: 'past' },
          { title: 'Upcoming Delegation', value: 'upcomingDelegation' },
          { title: 'Past Delegation', value: 'pastDelegation' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
    },
  },
}
