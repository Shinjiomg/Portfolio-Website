import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/About.vue';
import Resume from '../pages/Resume.vue';
import Contact from '../pages/Contact.vue';
import ErrorPage from '../pages/ErrorPage.vue';
import SidebarLayout from '../layouts/SidebarLayout.vue';
import Blog from '../pages/Blog.vue'
import Work from '../pages/Work.vue'

const routes = [
    {
        path: '/',
        redirect: '/about',
    },
    {
        path: '/',
        component: SidebarLayout,
        children: [
            { path: 'about', component: About },
            { path: 'resume', component: Resume },
            { path: 'contact', component: Contact },
            { path: 'blog', component: Blog },
            { path: 'work', component: Work },
        ]
    },
    {
        path: '/:catchAll(.*)',
        component: ErrorPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
