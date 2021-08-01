export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6106e66186f404d7b2abd0d8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ciepk81f',
                  apiId: '535453a0-b53d-4ce2-986d-aec52833e52d'
                },
                {
                  buildHookId: '6106e661415ce02693626873',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-smd3ip4e',
                  apiId: '408749b9-dea3-4fbe-a5e1-208b45374254'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JackP96/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-smd3ip4e.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
