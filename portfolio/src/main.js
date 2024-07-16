import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import 'material-icons/iconfont/material-icons.css';
import { createI18n } from 'vue-i18n';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    BiGithub,
    CoLinkedinIn,
    RiSmartphoneLine,
    MdEmailRound,
    HiSolidLocationMarker,
    FaCalendarAlt,
    FaRegularIdCard,
    RiFileUserLine,
    MdContacts,
    CoFacebookF,
    BiInstagram,
    CoLanguage,
    BiCodeSlash,
    OiApps,
    BiWindowDesktop,
    MdVideogameasset,
    IoSchool,
    FaBriefcase,
    SiBookstack,
    HiSolidLightBulb,
    RiLoader5Fill,
    BiTwitch,
    BiTwitter
} from "oh-vue-icons/icons";

addIcons(BiGithub,
    CoLinkedinIn,
    RiSmartphoneLine,
    MdEmailRound, HiSolidLocationMarker,
    FaCalendarAlt,
    FaRegularIdCard,
    RiFileUserLine,
    MdContacts,
    CoFacebookF,
    BiInstagram,
    CoLanguage,
    BiCodeSlash,
    OiApps,
    BiWindowDesktop,
    MdVideogameasset,
    IoSchool,
    FaBriefcase,
    SiBookstack,
    HiSolidLightBulb,
    RiLoader5Fill,
    BiTwitch,
    BiTwitter
);

import messages from './locals/index';

const browserLanguage = navigator.language.split('-')[0];
const defaultLanguage = localStorage.getItem('language') || (browserLanguage === 'es' ? 'es' : 'en');
const i18n = createI18n({
    locale: defaultLanguage,
    fallbackLocale: 'es',
    messages,
});

createApp(App)
    .use(router)
    .use(i18n)
    .component("v-icon", OhVueIcon)
    .mount('#app');
