const mysql=require('mysql');

function mysql() {
    const db=mysql.createConnection({
        user: 'root',
        host: 'localhost',
        password: '0000',
        database: 'content'
    });
}

module.exports={
    mysql
}
