const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'db', 
     user: 'root', 
     password: '123456',
     database: 'my_db',
     connectionLimit: 5
});

pool.getConnection()
.then(conn => {

  conn.query("SELECT * FROM users")
    .then((rows) => {
      console.log(rows);
    });
    
}).catch(err => {
  //not connected
});


