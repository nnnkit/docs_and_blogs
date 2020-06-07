module.exports = {
  docs: [
    {
      type: 'category',
      label: 'JS Fundamental',
      items: [
        'fundamental/main123',
        'introduction',
        'hello-world',
        {
          'Store Of Value': [
            'value',
            'variable',
            'type-conversion',
            'operators',
            'expression-and-statement',
          ],
        },
        'condition-and-loops',
        'function',
        {
          'Data Structure': [
            'object',
            'array',
            'value-vs-reference',
            'garbage-collection',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'DOM',
      items: [
        'dom/browser-env',
        'dom/dom',
        'dom/selecting-element',
        'dom/manupulation',
        'dom/events',
      ],
    },
    {
      type: 'category',
      label: 'Debugging',
      items: ['console', 'style-guide', 'fixing-issue', 'testing'],
    },
    {
      type: 'category',
      label: 'React',
      items: [
        'react/prerequisite',
        'react/introduction',
        'react/hello-world',
        'react/component',
        'react/component-ex',
        'react/state',
        'react/lifecycle',
      ],
    },
  ],
};