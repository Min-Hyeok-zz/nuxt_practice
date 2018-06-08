const mysql = require('mysql');
const db = mysql.createConnection(require('../config/db.js'))

db.connect((err) => {
    if (err) {
        console.log(err)
    } else{
        console.log('mysql 이스 커넥티트')
    }
})

module.exports = (app,fs) => {

    //게시글 리스트 출력
    app.get('/board', (req,res) => {
        const sql = 'select * from board order by date desc'
        res.header("Access-Control-Allow-Origin", "*")//이거 안해주면 외부 요청 안댐 json 못긁어옴(내부는 상관없음) https://brunch.co.kr/@adrenalinee31/1
        db.query(sql, (err,results) => {
            res.json(results)
        })
    })

    //게시글 보기 페이지
    app.get('/board/view/:idx',(req,res) => {
        const idx = req.params.idx
        const sql = `select * from board where idx=${idx}`
        db.query(sql, (err,results) => {
            res.json(results)
        })
    })
    
    app.post('/board/write', (req,res) => {
        res.header("Access-Control-Allow-Origin", "*")
        const writer = req.body.writer
        const subject = req.body.subject
        const content = req.body.content
        const sql = `insert into board set writer='${writer}', subject='${subject}', content='${content}', date=now()`;
        db.query(sql, (err,results) => {
            console.log(sql)
            res.json(results)
        })
    })

}