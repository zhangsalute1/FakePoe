<template>
  <div class="AsideMenuSecion1">
    <div class="div1">
      <svg style="width: 24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="ManageBotsCardSection_searchIcon__laGLi">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM2 10.5a8.5 8.5 0 1 1 15.176 5.262l4.48 4.48a1 1 0 0 1-1.413 1.415l-4.481-4.481A8.5 8.5 0 0 1 2 10.5Z"
        ></path>
      </svg>
      <div class="AsideMenuSecion1_span">
        <span>探索</span>
        <svg style="width: 12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="ManageBotsCardSection_labelIcon__EjW_j">
          <path
            fill="currentColor"
            d="M8.38 21.5c.26 0 .51-.1.71-.29l8.5-8.5a.996.996 0 0 0 0-1.41l-8.5-8.5a.996.996 0 1 0-1.41 1.41L15.46 12l-7.79 7.8a.996.996 0 0 0 0 1.41c.2.19.45.29.71.29Z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="div1">
      <svg style="width: 24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="ManageBotsCardSection_createBotIcon__9JUYg">
        <path
          d="M13.561 12.412a1 1 0 0 1-1-1V10a1 1 0 1 1 2 0v1.412a1 1 0 0 1-1 1ZM8.854 12.412a1 1 0 0 1-1-1V10a1 1 0 0 1 2 0v1.412a1 1 0 0 1-1 1ZM11.222 17.186a5.285 5.285 0 0 1-4.23-2.093 1 1 0 1 1 1.589-1.214 3.301 3.301 0 0 0 2.641 1.308 3.298 3.298 0 0 0 2.64-1.308 1.001 1.001 0 0 1 1.59 1.214 5.286 5.286 0 0 1-4.23 2.093ZM21.944 18.5h-1.5V17a1 1 0 1 0-2 0v1.5h-1.5a1 1 0 1 0 0 2h1.5V22a1 1 0 1 0 2 0v-1.5h1.5a1 1 0 1 0 0-2Z"
        ></path>
        <path
          d="M18.443 10.808v3.369c.314-.112.65-.177 1.001-.177.351 0 .686.065.999.177v-3.369c0-4.813-3.878-8.308-9.222-8.308C5.877 2.5 2 5.994 2 10.808V20.5a1 1 0 1 0 2 0v-9.692C4 7.094 6.97 4.5 11.222 4.5c4.252 0 7.221 2.594 7.221 6.308Z"
        ></path>
      </svg>
      <div class="AsideMenuSecion1_span">
        <span>创建机器人</span>
        <svg style="width: 12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="ManageBotsCardSection_labelIcon__EjW_j">
          <path
            fill="currentColor"
            d="M8.38 21.5c.26 0 .51-.1.71-.29l8.5-8.5a.996.996 0 0 0 0-1.41l-8.5-8.5a.996.996 0 1 0-1.41 1.41L15.46 12l-7.79 7.8a.996.996 0 0 0 0 1.41c.2.19.45.29.71.29Z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.AsideMenuSecion1 {
  display: flex;
  height: 91px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
.div1:hover {
  background-color: #e0e0e0;
}
.div1 {
  display: flex;
  width: 50%;
  height: 67px;
  flex-direction: column;
  background-color: #f7f7f7;
  margin-left: 14px;
  margin-right: 14px;
  padding: 0 10px 0 10px;
  justify-content: space-evenly;
  border-radius: 10px;
}
.AsideMenuSecion1_span {
  display: flex;
  justify-content: space-between;
}
</style>
