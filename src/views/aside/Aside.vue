<template>
  <div class="sidebar">
    <!--  AsideHeader -->
    <AsideHeader />
    <!-- AsideMenu -->
    <AsideMenu />
  </div>
</template>
<script setup>
import AsideHeader from '@/views/aside/AsideHeader.vue';
import AsideMenu from '@/views/aside/AsideMenu.vue';
</script>
<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
