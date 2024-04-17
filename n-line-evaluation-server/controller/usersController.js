const conn = require("../utils/dbconfig")
const {StatusCodes} = require("http-status-codes")

const join = (req, res) => {
    const {name} = req.body
    let sql = `INSERT INTO users (name) VALUE (?)`
    conn.query(sql, name, (err, results) => {
        if(err) {
            console.log(err)
            return res.status(StatusCodes.UNAUTHORIZED).send("실패ㅠ")
        } else {
            return res.status(StatusCodes.OK).send("성공")
        }
    })
}

module.exports = {join}