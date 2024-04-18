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
            res.cookie('idKey', results.insertId);
            return res.status(StatusCodes.OK).send("성공")
        }
    })
}

const list = (req, res) => {
    let sql = `SELECT * FROM scores LEFT JOIN users
    ON users.id = scores.user_id
    ORDER BY scores.score1 DESC;`

    conn.query(sql, (err, results) => {
        if(err) {
            console.log(err)
            return res.status(StatusCodes.UNAUTHORIZED).send("실패ㅠ")
        } else {
            return res.status(StatusCodes.OK).json(results)
        }
    })
}

const detail = (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    let sql = `SELECT * FROM contexts LEFT JOIN users ON users.id = contexts.user_id WHERE contexts.user_id = ?`
    conn.query(sql, id, (err, results) => {
        if(err) {
            console.log(err)
            return res.status(StatusCodes.UNAUTHORIZED).send("실패ㅠ")
        } else {
            return res.status(StatusCodes.OK).json(results)
        }

    })
}

module.exports = {join, list, detail}