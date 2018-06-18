const mysql = require('mysql');
const db = mysql.createConnection(require('./config/db.js'))

db.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('mysql 이스 커넥티트')
    }
})

module.exports = (app, fs) => {

    //게시글 리스트 출력
    app.get('/api/board', (req, res) => {
        const sql = 'select * from board order by date desc'
        db.query(sql, (err, results) => {
            res.json(results)
        })
    })

    //게시글 보기 페이지
    app.get('/api/board/:idx', (req, res) => {
        const idx = req.params.idx
        const sql = `select * from board where idx=${idx}`
        const hit = `update board set hit=hit+1 where idx=${idx}`
        db.query(hit)
        db.query(sql, (err, results) => {
            res.json(results)
        })
    })

    //글작성 페이지
    app.post('/api/board', (req, res) => {
        const writer = req.body.writer
        const subject = req.body.subject
        const content = req.body.content
        const sql = `insert into board set writer=?, subject=?, content=?, date=now()`;
        db.query(sql, [writer, subject, content], (err, results) => {
            console.log(sql)
            res.json(results)
        })
    })

    //글삭제
    app.post('/api/delete', (req, res) => {
        const idx = req.body.idx
        const sql = `delete from board where idx=?`
        db.query(sql, [idx])
    })

    //글작성
    app.put('/api/board/:idx', (req, res) => {
        const idx = req.params.idx
        const writer = req.body.writer
        const subject = req.body.subject
        const content = req.body.content
        const sql = `update board set writer=?, subject=?, content=? where idx = ?`
        db.query(sql, [writer, subject, content, idx], (err, results) => {
            console.log(sql)
            res.json(results)
        })
    })

    app.post('/api/member', (req, res) => {
        const id = req.body.id
        const pw = req.body.pw
        const name = req.body.name
        const sql = `insert into member set id=?, pw=?, name=?`
        const chk = `select id from member where id='${id}'`
        db.query(chk, (err, results) => {
            if (results[0]) {
                console.log('중복대따')
            } else {
                db.query(sql, [id, pw, name])
            }
            res.json(results)
        })
    })

    app.post('/api/login', (req, res) => {
        const id = req.body.id
        const pw = req.body.pw
        const sql = `select * from member where id=? and pw=?`
        db.query(sql, [id, pw], (err, results) => {
            res.json(results)
        })
    })

}