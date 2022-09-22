//Bookstore assitant
const express = require('express');
const app = express();

//The API port
app.set('port', process.env.PORT || 4000);

app.listen(4000, () => {
    //console.log('conexion exitosa');
});

//Router
app.use(require('./router/index.router'));