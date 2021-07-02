const sqlite3 = require("sqlite3");

const db = new sqlite3.Database('./emp_database.db', (err) => {
    if (err) {
        console.error("Erro opening database " + err.message);
    }else{
        console.log('Connected to database');
        db.run('CREATE TABLE IF NOT EXISTS employees( \
            employee_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
            last_name NVARCHAR(20)  NOT NULL,\
            first_name NVARCHAR(20)  NOT NULL,\
            title NVARCHAR(20),\
            address NVARCHAR(100),\
            country_code INTEGER\
        )');
    }
});

module.exports = {
    db: db
}