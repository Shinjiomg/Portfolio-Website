<template>
    <div class="bg-gray-100 rounded-xl p-2 w-full font-montserrat">
        <ul>
            <li v-for="(item, index) in personalInfo" :key="index" class="flex items-center rounded-xl p-2">
                <div class="bg-white rounded-xl shadow-md p-1 flex items-center">
                    <v-icon :name="item.icon" :scale="2" :fill="item.iconColor" />
                </div>
                <div class="ml-2">
                    <p class="text-xs font-black">{{ item.label }}</p>
                    <p class="text-base font-medium">{{ item.value }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PersonalInfo',
    props: {
        personalInfo: Array,
    },
};
</script>
