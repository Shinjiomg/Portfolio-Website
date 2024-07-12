import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/About.vue';
import Resume from '../pages/Resume.vue';
import Contact from '../pages/Contact.vue';
import SidebarLayout from '../layouts/SidebarLayout.vue';

const routes = [
    {
        path: '/',
        component: SidebarLayout,
        redirect: 'about',
        children: [
            { path: '', component: About },
            { path: 'about', component: About },
            { path: 'resume', component: Resume },
            { path: 'contact', component: Contact },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;