const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '/', 
        component: () => import('pages/HomeSection.vue') 
      },

      { 
        path: 'work', 
        component: () => import('pages/WorkSection.vue') 
      },

      { 
        path: 'projects', 
        component: () => import('pages/ProjectsSection.vue') 
      },

    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
