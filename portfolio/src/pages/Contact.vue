<template>
    <div class="items-center">
        <div class="flex items-center mb-6">
            <h1 class="text-4xl font-roboto-slab font-black mr-4 whitespace-nowrap">{{ $t('menu.contact') }}</h1>
            <div class="w-1/3 h-1 bg-blue-500"></div>
        </div>
        <p class="mb-6 text-3xl text-gray-700" v-html="$t('contact.availability')"></p>
        <form @submit.prevent="sendEmail" class="space-y-4">
            <div>
                <label for="name" class="block text-md font-montserrat">{{ $t('contact.name') }}</label>
                <input type="text" id="name" v-model="form.name"
                    class="mt-1 block w-full p-2 border border-gray-300 rounded-xl shadow-sm" required>
            </div>
            <div>
                <label for="email" class="block text-md font-montserrat">{{ $t('contact.email') }}</label>
                <input type="email" id="email" v-model="form.email"
                    class="mt-1 block w-full p-2 border border-gray-300 rounded-xl shadow-sm" required>
            </div>
            <div>
                <label for="message" class="block text-md font-montserrat">{{ $t('contact.message') }}</label>
                <textarea id="message" v-model="form.message"
                    class="mt-1 block w-full p-2 border border-gray-300 rounded-xl shadow-sm" rows="4"
                    required></textarea>
            </div>
            <button type="submit"
                class="w-full bg-blue-500 hover:bg-blue-700 text-white font-montserrat font-extrabold py-3 px-8 rounded-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-100">{{
                    $t('contact.send')
                }}</button>
        </form>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    name: 'Contact',
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        sendEmail() {
            emailjs.send('service_y4am91n', 'template_29trfm7', this.form, '2vXZwyQ77kGb5fXTu')
                .then((response) => {
                    alert(this.$t("contact.success"));
                }, (err) => {
                    alert(this.$t("contact.error"));
                });
        }
    }
};
</script>