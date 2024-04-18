const conn = require("../utils/dbconfig")
const openai = require("../utils/aiconfig")
const { StatusCodes } = require("http-status-codes")

const setLine = async (req, res) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{
                role: "system", content: `실제로 있는 한글 3글자 단어를 무작위로 단 하나만 골라서 예시와 같이 JSON 형식으로 제공해줘. 반드시 3글자를 맞춰서 답변해야해. 3글자!
                예시 : 
                {
                name : 다람쥐
                }` }],
            model: "gpt-3.5-turbo",
        });
        let answer = completion.choices[0].message;
        answer = JSON.parse(answer.content);
        console.log(answer.name)
        return res.status(StatusCodes.OK).send(answer.name);
    } catch (error) {
        console.error("Error in processing request:", error);
        return res.status(StatusCodes.NOT_FOUND).send("Internal Server Error");
    }
}

const evalLine = async (req, res) => {
    let user_id = req.cookies.idKey
    user_id = parseInt(user_id)
    const {context} = req.body;
    console.log(context)
    let values = [user_id, context]
    let sql = `INSERT INTO contexts (user_id, first) VALUES (?,?)`
    conn.query(sql, values, (err, results) => {
        if(err) {
            console.log(err)
            return
        }
        else console.log(results)
    })
    let script =
    `
- N행시란 주어진 N글자 단어의 글자로 시작하는 문장이나 문구로 이루어진 글을 말한다
- "마우스"라는 단어가 예시로 주어졌을 때, 다음과 같이 N행시를 만들 수 있다
- 다음은 N행시의 예시
마: 마치 춤을 추듯
우: 우아하게 움직이며
스: 스크린 위에서 춤을 춰
- 좋은 N행시의 기준은 다음과 같다
1. 마우스와 같이 해당하는 단어의 특성을 포함하는 것
2. N행시로 작성한 글의 문맥이 자연스럽게 이어지는 것
3. 실제 존재하는 단어로 구성되어 있으며 단어 첫 글자에 임의 종성을 추가해 이어나가지 않는 것
4. 미괄식 구조로 임팩트를 줄 수 있는 것
- N행시를 제공 하면 위 항목에 기반해 얼마나 좋은지 1점에서 10점 사이로 평가. 
- 평가한 이유를 50자 이내로 간략하게 설명
- 답변은 반드시 {score: 점수,  answer: 평가내용}과 같은 JSON 형식
답변 예시
{
    "score" : 3,
    "answer" : "문맥이 어긋남, 글의 통일성이 없음, 무례한 표현 사용"
}
`
    script += context
    console.log(script)
    try {
        const completion = await openai.chat.completions.create({
            messages: [{
                role: "system", content: script
            
            }],
            model: "gpt-4-turbo",
        });
        let answer = completion.choices[0].message;
        console.log(answer.content)
        answer = JSON.parse(answer.content)

        sql = `INSERT INTO scores (user_id, score1) VALUES (?,?)`
        values = [user_id, answer.score]
        conn.query(sql, values, (err, results) => {
            if(err) {
                console.log(err)
                return
            }
            else console.log(results)
        })
        return res.status(StatusCodes.OK).send(answer);
    } catch (error) {
        console.error("Error in processing request:", error);
        return res.status(StatusCodes.NOT_FOUND).send("Internal Server Error");
    }
}

module.exports = { setLine, evalLine }

/*

*/