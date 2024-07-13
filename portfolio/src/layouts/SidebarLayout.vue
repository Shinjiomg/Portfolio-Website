<template>
    <div class="flex flex-col md:flex-row min-h-screen background">

        <aside class="md:text-black p-4 md:mt-20">
            <div class="card md:relative">
                <div class="md:hidden">
                    <img :src="profileImage" class="rounded-full w-48 mb-4 mx-auto" alt="Profile">
                </div>
                <div class="hidden md:block">
                    <img :src="profileImage" class="rounded-xl w-56 mx-auto -mt-28 mb-4" alt="Profile">
                </div>
                <div class="text-center mb-6">
                    <h2 class="text-2xl font-roboto-slab mb-2"><strong>{{ name }}</strong></h2>
                    <p
                        class="text-sm font-montserrat font-semibold bg-gray-100 px-6 py-2 w-max rounded-lg inline-block mb-6">
                        {{ profession }}</p>
                    <div class="mt-4 flex justify-center mb-6">
                        <a v-for="(social, index) in socialLinks" :key="index" :href="social.url"
                            class="flex items-center justify-center rounded-xl h-10 w-10 mx-3 bg-gray-100 mb-6 p-1 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-10"
                            :style="{ backgroundColor: social.isHover ? '#4299e1' : '#F3F4F6' }"
                            @mouseover="social.isHover = true" @mouseleave="social.isHover = false">
                            <v-icon :name="social.icon" :scale="1.2" :fill="social.isHover ? '#fff' : social.color" />
                        </a>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-xl p-2 w-full  font-montserrat">
                    <ul>
                        <li v-for="(item, index) in personalInfo" :key="index" class="flex items-center rounded-xl p-2">
                            <div class="bg-white rounded-xl shadow-md p-1 flex items-center">
                                <v-icon :name="item.icon" :scale="2" :fill="item.iconColor" />
                            </div>
                            <div class="ml-2">
                                <p class="text-xs font-black">{{ item.label }}</p>
                                <p class="text-base font-medium">{{ item.value }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="text-center">
                </div>
            </div>
        </aside>
        <main class=" md:flex-1 p-4">
            <div class="card mb-24 md:h-full">
                <router-view></router-view>
            </div>
        </main>

        <aside class="text-black md:hidden fixed bottom-0 left-0 right-0 z-50 shadow-md p-6">
            <div class="bg-white rounded-xl shadow-md p-4 font-montserrat font-medium text-sm">
                <nav class="flex justify-between items-center">
                    <router-link v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.link"
                        class="flex flex-col items-center justify-center w-full text-center"
                        :class="[$route.path === menuItem.link ? 'text-blue-500' : 'text-gray-600']">
                        <v-icon :name="menuItem.icon" class="text-lg mb-1"></v-icon>
                        <span>{{ menuItem.label }}</span>
                    </router-link>
                </nav>
            </div>
        </aside>

        <aside class="p-4 text-black hidden md:block">
            <div class="card font-montserrat font-medium text-sm">
                <nav class="flex flex-col items-center">
                    <ul v-for="(menuItem, index) in menuItems" :key="index"
                        class="w-full bg-gray-100 rounded-xl mb-4 mx-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-10">
                        <router-link :to="menuItem.link" class="block">
                            <li
                                :class="[$route.path === menuItem.link ? 'bg-blue-500 text-white' : 'hover:bg-blue-500',
                                    'flex flex-col items-center py-3 px-3 rounded-xl transition duration-300 ease-in-out']">
                                <v-icon :name="menuItem.icon" class="text-lg" />
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
                { label: 'About', link: '/about', icon: 'fa-regular-id-card' },
                { label: 'Resume', link: '/resume', icon: 'ri-file-user-line' },
                { label: 'Contact', link: '/contact', icon: 'md-contacts' },
            ]
        };
    },
};
</script>

<style scoped>
.card {
    @apply bg-white rounded-xl shadow-md p-7;
}

.hover\:bg-blue-500:hover {
    @apply bg-blue-500 text-white;
}

.background {
    background-color: #F3F4F6;
}

.md\\:hidden {
    display: none;
}
</style>
