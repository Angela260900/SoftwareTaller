//Auxiliar de libreria
const mysql = require('mysql');

//Create connection to mysql server
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'SoftwareTaller',
    user: 'root',
    password: '',

});

//Connect to mysql server
connection.connect(function(error) {
    if (error) {
        throw error;
    } else {
        //console.log("la Conexion con la base de datos a sido exitosa.")
    }

});



module.exports = connection;