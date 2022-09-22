const connection = require('../database/connection')

connect = connection;

function getRoles(res) {
    connect.query('SELECT * FROM role', function(error, results, fields) {
        if (error)
            throw error;

        results.forEach(result => {
            res.send(result);
        });

    })
}


module.exports = {
    "getRoles": getRoles,
    //"postRoles": postRoles
};