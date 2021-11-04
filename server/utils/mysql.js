const sql=require('mysql');

function mysql() {
    const db=sql.createPool({
        user: 'root',
        host: 'localhost',
        password: '0000',
        database: 'ssd'
    });
}

module.exports={
    mysql
}
