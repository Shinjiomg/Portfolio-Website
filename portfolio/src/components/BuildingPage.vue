<template>
    <div class="flex items-center justify-center flex-col">
        <div ref="lottieContainer" class="h-90 w-90"></div>
        <h1 class="mt-6 text-3xl font-normal md:text-4xl font-montserrat text-black animate-bounce">
            {{ $t('error.building') }}
        </h1>
    </div>
</template>

<script>
import lottie from 'lottie-web';
import BuildingPage from '../assets/building-page.json';

export default {
    name: 'BuildingPage',
    mounted() {
        this.initLottieAnimation();
    },
    methods: {
        initLottieAnimation() {
            lottie.loadAnimation({
                container: this.$refs.lottieContainer,
                animationData: BuildingPage,
                loop: true,
                autoplay: true,
                renderer: 'svg',
            });
        }
    },
};
</script>

<style scoped>
@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }
}

.animate-bounce {
    animation: bounce 1.5s infinite;
}
</style>