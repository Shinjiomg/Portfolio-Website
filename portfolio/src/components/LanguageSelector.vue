<template>
    <div class="language-selector">
        <v-icon name="co-language" scale="1.2"></v-icon>
        <select v-model="selectedLanguage" @change="changeLanguage"
            class="text-sm font-montserrat font-semibold px-6 py-2 w-max rounded-3xl mb-4 bg-transparent">
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
            localStorage.setItem('language', this.selectedLanguage); // Guarda el idioma en localStorage
        }
    },
    watch: {
        selectedLanguage(newLanguage) {
            this.$emit('language-changed', newLanguage);
        }
    },
    mounted() {
        // Asegura que el idioma seleccionado en el select refleje el valor de localStorage
        this.selectedLanguage = localStorage.getItem('language') || (navigator.language.split('-')[0] === 'es' ? 'es' : 'en');
    }
};
</script>
