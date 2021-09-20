'use strict';

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require ('./router/index')

const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'db', 
     user: 'root', 
     password: '123456',
     database: 'my_db',
     connectionLimit: 5
});

const PORT = process.env.PORT || 8888;
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
    try {
        await pool.getConnection()
        .then(conn => {
        
          conn.query("SELECT * FROM users")
            .then((rows) => {
              console.log(rows);
            });
            
        }).catch(err => {
          //not connected
        });

        app.listen(PORT, () => console.log (`Crypto Server started on PORT = ${PORT}`))    
    
    } catch (e) {
        console.log(e);
    }
}

start()
