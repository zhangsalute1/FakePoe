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
import Aside from '@/views/home/Aside.vue';
import Main from '@/views/home/Main.vue';
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
  width: 75%;
  height: 100vh;
  background-color: aliceblue;
}
</style>
