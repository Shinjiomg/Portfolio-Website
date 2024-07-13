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

const i18n = createI18n({
    locale: 'en',  // Establece el idioma por defecto aquí
    fallbackLocale: 'en',
    messages,  // Utiliza los mensajes importados
});

createApp(App).use(router).use(i18n).component("v-icon", OhVueIcon).mount('#app');