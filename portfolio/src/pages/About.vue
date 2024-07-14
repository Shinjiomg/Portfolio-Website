<template>
    <div>
        <div class="flex items-center mb-6">
            <h1 class="text-4xl font-roboto-slab font-black mr-4 whitespace-nowrap">{{ $t('about.me') }}</h1>
            <div class="w-1/3 h-1 bg-blue-500"></div>
        </div>
        <p class="xl:text-lg font-montserrat font-medium mb-6">{{ $t('about.content') }}</p>
        <h2 class="text-3xl font-roboto-slab font-medium mb-6">{{ $t('about.what-i-do') }}</h2>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div v-for="(card, index) in jobCards" :key="index"
                :class="[index % 2 === 1 ? 'bg-gray-100' : 'bg-[#edf4fa]', 'rounded-3xl p-7']">
                <div class="md:flex md:p-2">
                    <v-icon :name="card.icon" scale="3" class="mr-4" :fill="card.iconColor"></v-icon>
                    <div>
                        <h3 class="text-xl font-montserrat font-extrabold">{{ $t(card.title) }}</h3>
                        <p class="text-md font-montserrat">{{ $t(card.description) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            jobCards: [
                {
                    title: 'about.jobs.web',
                    description: 'about.jobs.info.web',
                    icon: 'bi-code-slash',
                    iconColor: '#379cee'
                },
                {
                    title: 'about.jobs.app',
                    description: 'about.jobs.info.app',
                    icon: 'oi-apps',
                    iconColor: '#ff7690'
                },
                {
                    title: 'about.jobs.design',
                    description: 'about.jobs.info.design',
                    icon: 'bi-window-desktop',
                    iconColor: '#ca7ee2'
                },
                {
                    title: 'about.jobs.videogames',
                    description: 'about.jobs.info.videogames',
                    icon: 'md-videogameasset',
                    iconColor: '#1ca085'
                },
            ]
        };
    }
};
</script>
