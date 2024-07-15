<template>
    <div class="language-selector border-2 border-gray-300 rounded-3xl bg-white w-max mb-4 inline-flex items-center">
        <v-icon name="co-language" scale="1.2" class="ml-2"></v-icon>
        <select v-model="selectedLanguage" @change="changeLanguage"
            class="text-sm font-montserrat font-semibold py-2 rounded-3xl outline-none mr-2 custom-select bg-transparent">
            <option value="es">Español</option>
            <option value="en">English</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedLanguage: localStorage.getItem('language') || (navigator.language.split('-')[0] === 'es' ? 'es' : 'en')
        };
    },
    methods: {
        changeLanguage() {
            this.$emit('language-changed', this.selectedLanguage);
            localStorage.setItem('language', this.selectedLanguage);
        }
    },
    watch: {
        selectedLanguage(newLanguage) {
            this.$emit('language-changed', newLanguage);
        }
    },
    mounted() {
        this.selectedLanguage = localStorage.getItem('language') || (navigator.language.split('-')[0] === 'es' ? 'es' : 'en');
    }
};
</script>
<style scoped>
select option {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    /* text-sm */
    background-color: white;
    color: black;
}
</style>
