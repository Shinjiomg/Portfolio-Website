<template>
    <div class="bg-white rounded-3xl shadow-md p-7 md:relative">
        <div class="md:hidden">
            <img :src="profileImage" class="rounded-full w-48 mb-3 mx-auto" alt="Profile">
        </div>
        <div class="hidden md:block">
            <img :src="profileImage" class="rounded-3xl w-48 mx-auto -mt-28 mb-3" alt="Profile">
        </div>
        <div class="text-center mb-4">
            <h2 class="text-2xl font-roboto-slab mb-2"><strong>{{ name }}</strong></h2>
            <LanguageSelector @language-changed="$emit('language-changed', $event)" />
            <p class="text-sm font-montserrat font-semibold bg-gray-100 px-6 py-2 w-max rounded-3xl inline-block mb-4">
                {{ profession }}</p>
            <SocialLinks :social-links="socialLinks" />
        </div>
        <PersonalInfo :personal-info="personalInfo" />
        <div class="mt-4 text-center">
            <DownloadButton />
        </div>
    </div>
</template>

<script>
import SocialLinks from './SocialLinks.vue';
import PersonalInfo from './PersonalInfo.vue';
import LanguageSelector from './LanguageSelector.vue';
import DownloadButton from './DownloadButton.vue';

export default {
    name: 'ProfileCard',
    components: {
        SocialLinks,
        PersonalInfo,
        LanguageSelector,
        DownloadButton
    },
    props: {
        profileImage: String,
        name: String,
        profession: String,
        socialLinks: Array,
        personalInfo: Array,
    },
};
</script>
