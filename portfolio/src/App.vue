<template>
  <div class="bg-custom-background min-h-screen">
    <router-view />
  </div>
</template>

<style>
.bg-custom-background {
  background-color: #D6EFD8;
}
</style>

<script>
export default {
  name: 'App'
};
</script>