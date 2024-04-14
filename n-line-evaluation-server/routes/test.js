require('dotenv').config();
const express = require("express");
const router = express.Router();
const OpenAIApi = require("openai");

const openai = new OpenAIApi({
    apiKey: process.env.OPEN_AI_API_KEY
});

router.use(express.json());

router.post("/", async (req, res) => {
    try {
        const data = req.body.value;

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: `N행시를 하기 위해 사용하기 위한 실제로 있는 단어를 무작위로 골라 예시와 같이 JSON 형식으로 제공해줘
            예시 : 
            {
            name : 다람쥐
            }` }],
            model: "gpt-3.5-turbo",
        });

        const answer = completion.choices[0].message;
        return res.status(200).send(answer.content);
    } catch (error) {
        console.error("Error in processing request:", error);
        return res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
