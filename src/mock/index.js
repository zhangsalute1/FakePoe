import Mock from 'mockjs';

Mock.mock('/mock/chat', 'post', () => {
    return {
        role: "bot",
        content: Mock.Random.pick([
            "Welcome to our chat service! How can I help you today? If you have any questions about our services or need assistance with a specific issue, please let me know and I'll do my best to assist you.",
            "Hello! Are you looking for assistance today? Whether it's a query about our products or you need help resolving an issue, I'm here to offer you the best support. Please share the details of your concern.",
            "Hi there! How can I make your day better? If there's anything specific you're dealing with or just looking for general information, I'm here to help you. Let’s discuss what you need.",
            "Good day! What can I do for you today? Our services are tailored to meet your needs, and I'm here to provide any information or assistance you might require. Feel free to ask me anything.",
            "Hello! How may I assist you right now? I’m equipped to handle a wide range of inquiries, so whether it’s a simple question or a complex issue, I'm here to guide you through."
        ]),
        status: 200,
        message: "Success"
    };
});

export default Mock;
