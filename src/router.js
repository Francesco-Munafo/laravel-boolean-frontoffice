import { createRouter, createWebHashHistory } from "vue-router";
import AboutView from './view/AboutView.vue'
import HomeView from './view/HomeView.vue'
import ContactView from './view/ContactView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    }
];

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    }
)

export { router }