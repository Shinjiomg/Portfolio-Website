<template>
    <div class="flex flex-col md:flex-row bg-[#F3F4F6] min-h-screen">
        <aside class="md:text-black p-4 lg:mb-20 md:mt-20">
            <ProfileCard :profile-image="profileImage" :name="$t('profile.name')" :profession="$t('profile.profession')"
                :social-links="socialLinks" :personal-info="translatedPersonalInfo"
                @language-changed="handleLanguageChange" />
        </aside>
        <main class="p-4 xl:mr-[200px] w-full">
            <div class="bg-white rounded-3xl shadow-md p-7 mb-20 xl:h-full flex flex-col justify-between">
                <router-view class="pt-8 md:p-8"></router-view>
                <p class="mt-10 md:text-sm text-gray-500 self-center">&copy; {{ new Date().getFullYear() }} {{ $t('profile.name') }}</p>
            </div>
        </main>
        <MobileMenu :menu-items="translatedMenuItems" />
        <DesktopMenu class="md:right-0 fixed h-screen z-10" :menu-items="translatedMenuItems" />
    </div>
</template>
<script>
import ProfileCard from '../components/ProfileCard.vue';
import MobileMenu from '../components/MobileMenu.vue';
import DesktopMenu from '../components/DesktopMenu.vue';

export default {
    name: 'SidebarLayout',
    components: {
        ProfileCard,
        MobileMenu,
        DesktopMenu,
    },
    computed: {
        translatedPersonalInfo() {
            return this.personalInfo.map(info => ({
                label: this.$t(`profile.personalInfo.${info.label}`),
                value: info.label === 'birthday' ? `${this.$t(`month.${info.value.split(' ')[0].toLowerCase()}`)} ${info.value.split(' ')[1]}, ${info.value.split(' ')[2]}` : info.value,
                icon: info.icon,
                iconColor: info.iconColor
            }));
        },
        translatedMenuItems() {
            return this.menuItems.map(item => ({
                label: this.$t(`menu.${item.label}`),
                link: item.link,
                icon: item.icon
            }));
        }
    },
    data() {
        return {
            profileImage: 'https://avatars.githubusercontent.com/u/48720513?v=4',
            socialLinks: [
                { url: 'https://github.com/Shinjiomg', icon: 'bi-github', color: '#000' },
                { url: 'https://www.linkedin.com/in/jhonatandavidbecerradonado-frontend/', icon: 'co-linkedin-in', color: '#2980b9' },
                { url: 'https://www.instagram.com/shannalotte', icon: 'bi-instagram', color: '#E1306C' },
                { url: 'https://x.com/Shannalote', icon: 'bi-twitter', color: '#2980b9' },
                { url: 'https://www.twitch.tv/shannalotte', icon: 'bi-twitch', color: '#8E43AD' },
            ],
            personalInfo: [
                { label: 'phone', value: '(+57) 3015703750', icon: 'ri-smartphone-line', iconColor: '#1CA085' },
                { label: 'email', value: 'yonkitas9@gmail.com', icon: 'md-email-round', iconColor: '#87c1e8' },
                { label: 'location', value: 'Soacha, Colombia', icon: 'hi-solid-location-marker', iconColor: '#ff7690' },
                { label: 'birthday', value: 'June 07 2001', icon: 'fa-calendar-alt', iconColor: 'purple' },
            ],
            menuItems: [
                { label: 'about', link: '/about', icon: 'fa-regular-id-card' },
                { label: 'resume', link: '/resume', icon: 'ri-file-user-line' },
                { label: 'contact', link: '/contact', icon: 'md-contacts' },
                { label: 'blog', link: '/blog', icon: 'md-newspaper' },
                { label: 'work', link: '/work', icon: 'io-briefcase' },
            ],
        };
    },
    mounted() {
        const savedLanguage = localStorage.getItem('language') || 'es';
        this.$i18n.locale = savedLanguage;
    },
    methods: {
        handleLanguageChange(language) {
            this.$i18n.locale = language;
        }
    }
};
</script>
