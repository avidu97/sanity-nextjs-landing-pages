export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6289f1a0a700c12e90e80041',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qr73nqz8',
                  apiId: 'eb93e48b-6a82-4526-b6c5-5d7003e010e6'
                },
                {
                  buildHookId: '6289f1a08372442c057a76a5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zesu2jcp',
                  apiId: 'e229fabb-1791-4809-9fe7-5d41bfc4bd13'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/avidu97/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zesu2jcp.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
