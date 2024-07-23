import express from 'express'
import axios from 'axios';
import cors from 'cors';

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

const API_KEY = 'sk-gVi9uSt36LTbxgwKF4016a753a324f7e9f7cCd7120Ba6a14';
const API_URL = 'https://api.gptapi.us/v1/chat/completions';

app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;
        const response = await axios.post(API_URL, {
            messages: messages,
            model: "gpt-4o",
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
        });

        res.json(response.data.choices[0].message);
    } catch (error) {
        console.error('接口错误', error);
        res.status(500).json({ message: '接口错误' });
    }
});

app.listen(port, () => {
    console.log(`后端运行地址:http://localhost:${port}/`)
})