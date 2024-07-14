<template>
    <aside class="p-4 text-black hidden xl:block">
        <div class="bg-white rounded-3xl shadow-md p-7 font-montserrat font-medium text-sm">
            <nav class="flex flex-col items-center">
                <ul v-for="(menuItem, index) in menuItems" :key="index"
                    class="w-full bg-gray-100 rounded-xl mb-4 mx-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-10">
                    <router-link :to="menuItem.link" class="block">
                        <li
                            :class="[$route.path === menuItem.link ? 'bg-blue-500 text-white' : 'hover:bg-blue-500',
                                'flex flex-col items-center py-3 px-3 rounded-xl transition duration-300 ease-in-out']">
                            <v-icon :name="menuItem.icon" class="text-lg" />
                            <span>{{ menuItem.label }}</span>
                        </li>
                    </router-link>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'DesktopMenu',
    props: {
        menuItems: Array,
    },
};
</script>
<style scoped>
.hover\:bg-blue-500:hover {
    @apply bg-blue-500 text-white;
}
</style>