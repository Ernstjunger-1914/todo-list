const sql=require('mysql');

function mysql() {
    const db=sql.createConnection({
        user: 'root',
        host: 'localhost',
        password: '0000',
        database: 'ssd'
    });
}

module.exports={
    mysql
}
