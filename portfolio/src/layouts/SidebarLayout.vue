<template>
    <div class="flex h-screen background">
        <aside class="w-max text-black p-4 mt-20">
            <div class="card relative">
                <img :src="profileImage" class="rounded-xl w-56 mx-auto -mt-28 mb-4" alt="Profile">
                <div class="text-center mb-4">
                    <h2 class="text-lg"><strong>{{ name }}</strong></h2>
                    <p class="text-sm">{{ profession }}</p>
                    <div class="mt-4 flex justify-center">
                        <a v-for="(social, index) in socialLinks" :key="index" :href="social.url"
                            class="flex items-center justify-center rounded-xl h-10 w-10 mx-1 bg-gray-100 p-1 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-10">
                            <v-icon :name="social.icon" :scale="1.2" :fill="social.color" />
                        </a>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-xl p-2 pr-16 mb-4">
                    <ul>
                        <li v-for="(item, index) in personalInfo" :key="index" class="flex items-center rounded-xl p-2">
                            <div class="bg-white rounded-xl shadow-md p-1 flex items-center">
                                <v-icon :name="item.icon" :scale="2" :fill="item.iconColor" />
                            </div>
                            <div class="ml-2">
                                <p class="text-xs">{{ item.label }}</p>
                                <p class="text-base">{{ item.value }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="text-center">
                    <!-- TODO: Agregar botón dinámico -->
                </div>
            </div>
        </aside>

        <main class="flex-1 p-4 overflow-y-auto">
            <div class="card h-full">
                <router-view></router-view>
            </div>
        </main>

        <aside class="text-black p-4">
            <div class="card">
                <nav class="flex flex-col items-center">
                    <ul v-for="(menuItem, index) in menuItems" :key="index"
                        class="w-full bg-gray-100 rounded-xl mb-4 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-10">
                        <router-link :to="menuItem.link" class="block">
                            <li
                                :class="[$route.path === menuItem.link ? 'bg-blue-500 text-white' : 'hover:bg-blue-500', 'flex flex-col items-center py-3 px-3 rounded-xl transition duration-300 ease-in-out']">
                                <v-icon :name="menuItem.icon" scale="1.5" />
                                <span>{{ menuItem.label }}</span>
                            </li>
                        </router-link>
                    </ul>
                </nav>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    name: 'SidebarLayout',
    data() {
        return {
            profileImage: 'https://avatars.githubusercontent.com/u/48720513?v=4',
            name: 'Jhonatan Becerra',
            profession: 'Web Developer',
            socialLinks: [
                { url: 'https://github.com/Shinjiomg', icon: 'bi-github', color: '#000' },
                { url: 'https://www.linkedin.com/in/jhonatandavidbecerradonado-frontend/', icon: 'co-linkedin-in', color: '#2980b9' },
                { url: 'https://www.facebook.com/jhonatan7w7/', icon: 'co-facebook-f', color: '#1DA1F2' },
                { url: 'https://www.instagram.com/shannalotte', icon: 'bi-instagram', color: '#E1306C' },
            ],
            personalInfo: [
                { label: 'Phone', value: '(+57) 3015703750', icon: 'ri-smartphone-line', iconColor: '#1CA085' },
                { label: 'Email', value: 'yonkitas9@gmail.com', icon: 'md-email-round', iconColor: '#87c1e8' },
                { label: 'Location', value: 'Soacha, Colombia', icon: 'hi-solid-location-marker', iconColor: 'red' },
                { label: 'Birthday', value: 'June 07, 2001', icon: 'fa-calendar-alt', iconColor: 'purple' },
            ],
            menuItems: [
                { label: 'About', link: '/about', icon: 'fa-regular-address-card' },
                { label: 'Resume', link: '/resume', icon: 'md-contactpage-outlined' },
                { label: 'Contact', link: '/contact', icon: 'md-contacts-outlined' },
            ]
        };
    },
    mounted() {
        console.log(this.$data);
    }
};

</script>

<style scoped>
.card {
    @apply bg-white rounded-xl shadow-sm p-7;
}

.hover\:bg-blue-500:hover {
    @apply bg-blue-500 text-white;
}

.background {
    background-color: #D6EFD8;
}
</style>