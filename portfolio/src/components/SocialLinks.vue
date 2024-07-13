<template>
    <div class="mt-4 flex justify-center mb-4">
        <a v-for="(social, index) in socialLinks" :key="index" :href="social.url"
            class="flex items-center justify-center rounded-xl h-10 w-10 mx-3 bg-gray-100 mb-4 p-1 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-10"
            :style="{ backgroundColor: social.isHover ? '#4299e1' : '#F3F4F6' }" @mouseover="social.isHover = true"
            @mouseleave="social.isHover = false">
            <v-icon :name="social.icon" :scale="1.2" :fill="social.isHover ? '#fff' : social.color" />
        </a>
    </div>
</template>

<script>
export default {
    name: 'SocialLinks',
    props: {
        socialLinks: Array,
    },
};
</script>
