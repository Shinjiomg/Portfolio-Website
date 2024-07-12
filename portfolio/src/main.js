import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import 'material-icons/iconfont/material-icons.css';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    BiGithub,
    CoLinkedinIn,
    RiSmartphoneLine,
    MdEmailRound,
    HiSolidLocationMarker,
    FaCalendarAlt,
    FaRegularAddressCard,
    MdContactpageOutlined,
    MdContactsOutlined,
    CoFacebookF,
    BiInstagram
} from "oh-vue-icons/icons";

addIcons(BiGithub,
    CoLinkedinIn,
    RiSmartphoneLine,
    MdEmailRound, HiSolidLocationMarker,
    FaCalendarAlt,
    FaRegularAddressCard,
    MdContactpageOutlined,
    MdContactsOutlined,
    CoFacebookF,
    BiInstagram
);

createApp(App).use(router).component("v-icon", OhVueIcon).mount('#app');