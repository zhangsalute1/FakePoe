<template>
  <div class="sidebar_main_xia">
    <!-- 探索，创建机器人 -->
    <AsideMenuSecion1 />
    <!-- 五个聊天 -->
    <AsideMenuSecion2 />
    <div class="divider"></div>
    <!-- 您的机器人 -->
    <AsideMenuSecion3 />
    <div class="divider"></div>
    <!-- 创作者，个人主页，设置 -->
    <AsideMenuSecion4 />
    <div class="divider"></div>
    <!-- 发送反馈 -->
    <AsideMenuSecion5 />
  </div>
</template>
<script setup>
import AsideMenuSecion1 from '@/views/aside/AsideMenuSecion1.vue';
import AsideMenuSecion2 from '@/views/aside/AsideMenuSecion2.vue';
import AsideMenuSecion3 from '@/views/aside/AsideMenuSecion3.vue';
import AsideMenuSecion4 from '@/views/aside/AsideMenuSecion4.vue';
import AsideMenuSecion5 from '@/views/aside/AsideMenuSecion5.vue';
</script>
<style scoped>
.sidebar_main_xia {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  z-index: 1;
  list-style-type: none;
  overflow-y: auto;
  height: 94vh;
}
.divider {
  border-top: 5px solid #f1f2f2;
}
</style>
