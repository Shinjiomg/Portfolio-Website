<template>
    <div>
        <div class="flex items-center mb-6">
            <h1 class="text-4xl font-roboto-slab font-black mr-4 whitespace-nowrap">{{ $t('about.me') }}</h1>
            <div class="w-1/3 h-1 bg-blue-500"></div>
        </div>
        <p class="text-lg font-montserrat font-medium mb-6">{{ $t('about.content') }}</p>
        <h2 class="text-3xl font-roboto-slab font-medium mb-6">{{ $t('about.what-i-do') }}</h2>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div class="bg-gray-100 rounded-3xl p-7">
                <div class="md:flex md:p-2">
                    <v-icon name="bi-code-slash" scale="3" class="mr-4" fill="#379cee"></v-icon>
                    <div>
                        <h3 class="text-xl font-montserrat font-extrabold">{{ $t('about.jobs.web') }}</h3>
                        <p class="text-md font-montserrat">{{ $t('about.content') }}</p>
                    </div>
                </div>
            </div>
            <div class="custom-color rounded-3xl p-7">
                <div class="md:flex md:p-2">
                    <v-icon name="oi-apps" scale="3" class="mr-4" fill="#ff7690"></v-icon>
                    <div>
                        <h3 class="text-xl font-montserrat font-extrabold">{{ $t('about.jobs.app') }}</h3>
                        <p class="text-md font-montserrat">{{ $t('about.content') }}</p>
                    </div>
                </div>
            </div>
            <div class="custom-color rounded-3xl p-7">
                <div class="md:flex md:p-2">
                    <v-icon name="bi-window-desktop" scale="3" class="mr-4" fill="#ca7ee2"></v-icon>
                    <div>
                        <h3 class="text-xl font-montserrat font-extrabold">{{ $t('about.jobs.design') }}</h3>
                        <p class="text-md font-montserrat">{{ $t('about.content') }}</p>
                    </div>
                </div>
            </div>
            <div class="bg-gray-100 rounded-3xl p-7">
                <div class="md:flex md:p-2">
                    <v-icon name="md-videogameasset" scale="3" class="mr-4" fill="#1ca085"></v-icon>
                    <div>
                        <h3 class="text-xl font-montserrat font-extrabold">{{ $t('about.jobs.videogames') }}</h3>
                        <p class="text-md font-montserrat">{{ $t('about.content') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
};
</script>

<style scoped>
.custom-color {
    background-color: #edf4fa;
}
</style>