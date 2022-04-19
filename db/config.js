require("dotenv").config()


module.exports = {
    secret : process.env.JWT_SECRET,
    dbHis : {
        host : process.env.DB_HIS_HOST,
        user : process.env.DB_HIS_USER,
        password : process.env.DB_HIS_PASSWORD,
        port : process.env.MYSQL_HIS_PORT,
        database: process.env.MYSQL_HIS_DB
    }
}



