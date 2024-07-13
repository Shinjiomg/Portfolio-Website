<template>
    <div className="container min-h-screen mx-auto flex flex-col items-center justify-center lg:flex-row">
        <div className="w-full lg:w-1/2 text-center">
            <p class="text-lg font-medium text-blue-500 dark:text-blue-400">ERROR 404</p>
            <h1 class="mt-3 text-2xl font-semibold md:text-3xl">Page not found :(</h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you're searching doesn't exist.
            </p>
            <p class="mt-5 text-md text-gray-500">
                <Button type="button" class="mx-auto">
                    Go back <span aria-hidden="true">&rarr;</span>
                </Button>
            </p>
        </div>
        <div ref="lottieContainer" class="h-90 w-90"></div>
    </div>
</template>

<script>
import lottie from 'lottie-web';
import notFoundAnimation from '../assets/not-found-animation.json';

export default {
    name: 'Error',
    mounted() {
        this.initLottieAnimation();
    },
    methods: {
        initLottieAnimation() {
            lottie.loadAnimation({
                container: this.$refs.lottieContainer,
                animationData: notFoundAnimation,
                loop: true,
                autoplay: true,
                renderer: 'svg',
            });
        },
    },
};
</script>
<style>
</style>