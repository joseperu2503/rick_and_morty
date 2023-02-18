import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/HomePage.vue')
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('@/pages/characters/CharactersPage.vue')
    },
    {
      path: '/characters/:characterId',
      name: 'character',
      component: () => import('@/pages/characters/CharacterPage.vue')
    },
    {
      path: '/locations',
      name: 'locations',
      component: () => import('@/pages/locations/LocationsPage.vue')
    },
    {
      path: '/locations/:locationId',
      name: 'location',
      component: () => import('@/pages/locations/LocationPage.vue')
    },
    {
      path: '/episodes',
      name: 'episodes',
      component: () => import('@/pages/episodes/EpisodesPage.vue')
    },
  ]
})

export default router
