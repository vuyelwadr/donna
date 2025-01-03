import { ContentSection } from '../types/content';

export const initialSections: ContentSection[] = [
  {
    id: 'hero',
    name: 'Hero Section',
    content: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Experience the ultimate relaxation with our premium in-home massage services'
            }
          ]
        }
      ]
    },
    currentVersion: '1',
    versions: [
      {
        id: '1',
        content: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Experience the ultimate relaxation with our premium in-home massage services'
                }
              ]
            }
          ]
        },
        createdAt: new Date().toISOString(),
        createdBy: 'System'
      }
    ]
  },
  {
    id: 'operatingHours',
    name: 'Operating Hours',
    content: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Operating Hours: Monday - Saturday, 8:00 AM - 8:00 PM'
            }
          ]
        }
      ]
    },
    currentVersion: '1',
    versions: [
      {
        id: '1',
        content: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Operating Hours: Monday - Saturday, 8:00 AM - 8:00 PM'
                }
              ]
            }
          ]
        },
        createdAt: new Date().toISOString(),
        createdBy: 'System'
      }
    ]
  }
];