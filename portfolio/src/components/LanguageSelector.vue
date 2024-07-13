<template>
    <div class="language-selector">
        <v-icon name="co-language" class="text-lg"></v-icon>
        <select id="language" classv-model="selectedLanguage" @change="changeLanguage"
            class="text-sm font-montserrat font-semibold px-6 py-2 w-max rounded-lg mb-4 bg-transparent">
            <option value="en">English</option>
            <option value="es">Español</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedLanguage: 'en'
        };
    },
    methods: {
        changeLanguage() {
            this.$emit('language-changed', event.target.value);
        }
    }
};
</script>