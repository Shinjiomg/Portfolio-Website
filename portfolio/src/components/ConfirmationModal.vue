<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
            <p class="text-lg mb-6">{{ message }}</p>
            <button @click="closeModal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                {{ buttonText }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        message: String,
        buttonText: String
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
};
</script>