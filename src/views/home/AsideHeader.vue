<template>
  <div class="AsideHeader">
    <a href="/">
      <img src="/public/fakepoe.png" alt="FakePoe" />
    </a>
    <div class="changeSidebar">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="ToggleSidebarCollapseButton_hamburgerIcon__VuiyV">
        <path
          d="M4.5 6.5h15a1 1 0 1 0 0-2h-15a1 1 0 0 0 0 2ZM19.5 17.5h-15a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2ZM19.5 11h-15a1 1 0 0 0 0 2h15a1 1 0 1 0 0-2Z"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.AsideHeader {
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  height: 6vh;
  align-items: center;
}
.AsideHeader a img {
  width: 95.8px;
}
.changeSidebar {
  cursor: pointer;
  width: 24px;
  height: 24px;
}
</style>
