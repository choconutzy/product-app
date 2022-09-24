require("dotenv").config();

module.exports ={
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": `${process.env.DB_HOST}`,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "azura",
    "password": "azura",
    "database": "db_april",
    "host": "45.76.184.44",
    "dialect": "mysql"
  }
}
