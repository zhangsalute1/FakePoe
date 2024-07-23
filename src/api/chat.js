import { service } from '@/utils/request.js';
import '@/mock/index.js'
export const sendChatMessage = async (messageContent) => {
    try {
        const requestBody = {
            messages: [{ role: "user", content: messageContent }]
        };
        const response = await service.post('/mock/chat', requestBody);
        return response;
    } catch (error) {
        console.error('sendChatMessage获取数据错误', error);
        throw error;
    }
}



