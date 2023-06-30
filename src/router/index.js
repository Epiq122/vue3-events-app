import { createRouter, createWebHistory } from 'vue-router';
import EventListView from '../views/EventListView.vue';
import EventDetails from '../views/event/Details.vue';
import EventLayout from '../views/event/Layout.vue';

import EventRegister from '../views/event/Register.vue';
import EventEdit from '../views/event/Edit.vue';

import AboutView from '../views/AboutView.vue';
import NotFound from '../views/NotFound.vue';
import NetworkError from '../views/NetworkError.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page, 10) || 1 }),
    },
    {
      path: '/events/:id',
      name: 'event-layout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetails,
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister,
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit,
        },
      ],
    },
    {
      path: '/event/:id',
      redirect: (to) => ({
        name: 'event-details',
        params: { id: to.params.id },
      }),
      children: [
        {
          path: 'register',
          redirect: () => ({ name: 'event-register' }),
        },
        {
          path: 'edit',
          redirect: () => ({ name: 'event-edit' }),
        },
      ],
    },

    {
      path: '/about',
      name: 'about',

      component: AboutView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true,
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkError,
    },
    {
      path: '/events',
      name: 'EventList',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page, 10) || 1 }),
    },
  ],
});

export default router;
