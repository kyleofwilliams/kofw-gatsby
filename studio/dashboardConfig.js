export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d4f259b141e0a92b957470b',
                  title: 'Sanity Studio',
                  name: 'kofw-gatsby-studio',
                  apiId: 'b9622eaf-d022-480f-bf26-ae52d91ad83e'
                },
                {
                  buildHookId: '5d4f259b6ba222b2169cfb2a',
                  title: 'Blog Website',
                  name: 'kofw-gatsby',
                  apiId: 'b4f24fd3-502b-4f9c-93eb-49f2dbc5a4d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kyleofwilliams/kofw-gatsby',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kofw-gatsby.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
