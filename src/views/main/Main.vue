<template>
  <div class="chat-container">
    <div class="content" ref="chatContent">
      <div v-for="msg in messages" :key="msg.id" :class="{ my: msg.role === 'user', gpt: msg.role === 'bot' }">
        <p>{{ msg.content }}</p>
      </div>
    </div>

    <div class="footer">
      <input v-model="message" class="input-field" @keyup.enter="sendMessage" />
      <button @click="sendMessage" class="send-button">发送</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { sendChatMessage } from '@/api/chat.js';

const message = ref('');
const messages = ref([]);
const chatContent = ref(null);

const sendMessage = async () => {
  if (!message.value.trim()) return;
  const userMessage = { role: 'user', content: message.value, id: Date.now() };
  messages.value.push(userMessage);
  await nextTick();

  try {
    const res = await sendChatMessage(message.value);
    const botMessage = { role: 'bot', content: res.data.content, id: Date.now() + 1 };
    messages.value.push(botMessage);
  } catch (error) {
    console.error('sendMessage错误', error);
  }
  message.value = '';
};
</script>

<style scoped lang="scss">
.chat-container {
  margin: 50px;
}
.content {
  flex-grow: 1;
  overflow: auto;
  height: 850px;
}

.footer {
  display: flex;
  padding: 10px;
}

.input-field {
  flex-grow: 1;
  margin-right: 10px;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.send-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
}

.my p {
  text-align: right;
  color: #333;
  margin-right: 10px;
}

.gpt p {
  text-align: left;
  color: #333;
  background-color: #f4f4f4;
}
</style>
