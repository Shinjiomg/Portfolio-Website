<template>
    <a :href="cvUrl" target="_blank"
        class="block w-full bg-blue-500 hover:bg-blue-700 text-white font-montserrat font-extrabold py-2 px-4 rounded-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        {{ $t('profile.download-cv') }}
    </a>
</template>

<script>
export default {
    name: "DownloadButton",
    computed: {
        cvUrl() {
            const language = this.$i18n.locale;
            if (language === 'en') {
                return '/assets/CV-Jhonatan.pdf';
            } else if (language === 'es') {
                return '/assets/HV-Jhonatan.pdf';
            }
            return '/assets/CV-Jhonatan.pdf';
        }
    }
}
</script>
