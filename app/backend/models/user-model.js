'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize("my_db", "root", "123456", {
  dialect: "mariadb",
  host: "db"
});

sequelize.sync().then(result=>{
    console.log(result);
  })
  .catch(err=> console.log(err));

// const UserSchema = sequelize.define("User", {
//     email: {
//       type: Sequelize.STRING,
//       unique: true,
//       prequire: true,
//     },
//     password: {
//       type: Sequelize.STRING,
//       require: true
//     },
//     isActivated: {
//       type: Sequelize.BOOLEAN,
//       default: false
//     },
//     activationLink: {
//         type: Sequelize.STRING,
//       }
//   });

//   module.exports = model('User', UserSchema)








// const {Schema, model} = require ('mariadb');

// const UserSchema = new Schema ({
//     email: {type: String, unique: true, require: true},
//     password: {type: String, require: true},
//     isActivated: {type: Boolean, default: false},
//     activationLink: {type: String},
// })

// module.exports = model('User', UserSchema)