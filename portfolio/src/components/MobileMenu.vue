<template>
    <aside class="text-black xl:hidden fixed bottom-0 left-0 right-0 z-50 shadow-md">
        <div class="bg-white shadow-md p-4 font-montserrat font-medium text-sm border-t-2 border-gray-200">
            <nav class="flex justify-between items-center">
                <router-link v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.link"
                    class="flex flex-col items-center justify-center w-full text-center"
                    :class="[$route.path === menuItem.link ? 'text-blue-500' : 'text-gray-600']">
                    <v-icon :name="menuItem.icon" class="text-lg mb-1"></v-icon>
                    <span>{{ menuItem.label }}</span>
                </router-link>
            </nav>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'MobileMenu',
    props: {
        menuItems: Array,
    },
};
</script>
