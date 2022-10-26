import React from 'react'
import {defineField} from 'sanity'

export default defineField({
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    {
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {
            title: 'Italic',
            value: 'em',
          },
          {
            title: 'Strong',
            value: 'strong',
          },
        ],
      },
      // Regular styles
      styles: [
        {
          blockEditor: {
            render: ({children}) => (
              <div style={{fontSize: '1.25rem', lineHeight: 1.25}}>{children}</div>
            ),
          },
          title: 'Heading',
          value: 'h2',
        },
      ],
      // Paragraphs
      type: 'block',
    },
    // Custom blocks
    {
      name: 'blockCallout',
      type: 'module.callout',
    },
  ],
})
