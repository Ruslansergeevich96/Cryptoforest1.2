const Sequelize = require("sequelize");
const sequelize = new Sequelize("my_db", "root", "123456", {
  dialect: "mariadb",
  host: "db"
});