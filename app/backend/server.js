'use strict';

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require ('./router/index')

const Sequelize = require('sequelize')
const sequelize = new Sequelize("my_db", "root", "123456", {
  dialect: "mariadb",
  host: "db"
});

sequelize.sync({force: true}).then(result=>{
    console.log(result);
  })
  .catch(err=> console.log(err));


const PORT = process.env.PORT || 8888;
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
    try {
        await db.getConnection()
        app.listen(PORT, () => console.log (`Crypto Server started on PORT = ${PORT}`))    
    } catch (e) {
        console.log(e);
    }
}

start()
