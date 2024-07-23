<template>
  <div class="layout">
    <div class="aside">
      <Aside />
    </div>
    <div class="mian">
      <Main />
    </div>
  </div>
</template>
<script setup>
import Aside from '@/views/aside/Aside.vue';
import Main from '@/views/main/Main.vue';
</script>
<style scoped>
.layout {
  display: flex;
}
.aside {
  width: 300px;
  height: 100vh;
}
.mian {
  height: 100vh;
  width: calc(100vw - 300px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
