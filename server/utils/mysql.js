const mysql=require('mysql');

function mysql() {
    const db=mysql.createPool({
        user: 'root',
        host: 'localhost',
        password: '0000',
        database: 'ssd'
    });
}

module.exports={
    mysql
}
