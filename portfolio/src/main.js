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
    CoLanguage
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
    CoLanguage
);

import messages from './locals/index';

// Detecta el idioma del navegador
const browserLanguage = navigator.language.split('-')[0];

// Obtiene el idioma desde localStorage, o usa el idioma del navegador como predeterminado
const defaultLanguage = localStorage.getItem('language') || (browserLanguage === 'es' ? 'es' : 'en');

const i18n = createI18n({
    locale: defaultLanguage, // Usa el idioma detectado o el idioma del navegador
    fallbackLocale: 'es',
    messages,  // Utiliza los mensajes importados
});

createApp(App)
    .use(router)
    .use(i18n)
    .component("v-icon", OhVueIcon)
    .mount('#app');
