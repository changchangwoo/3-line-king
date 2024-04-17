const OpenAIApi = require("openai");

const openai = new OpenAIApi({
    apiKey: process.env.OPEN_AI_API_KEY
});

module.exports = openai;