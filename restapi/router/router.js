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

    app.get('/board', (req,res) => {
        const sql = 'select * from board order by date desc';
        db.query(sql, (err,results) => {
            res.json(results)
        })
    })

    app.post('/board/write', (req,res) => {
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