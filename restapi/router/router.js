const mysql = require('mysql');
const db = mysql.createConnection(require('../config/db.js'))

db.connect((err) => {
    if (err) {
        console.log(err)
    } else{
        console.log('mysql 연결대따')
    }
})

module.exports = (app,fs) => {

    app.get('/board/list', (req,res) => {
        const sql = 'select * from board order by date desc';
        db.query(sql, (err,results) => {
            res.json(results)
        })
    })

}