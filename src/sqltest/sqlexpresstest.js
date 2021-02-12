












var express = require('express');
var tediousExpress = require('express4-tedious');
var app = express();
var Connection = require('tedious').Connection;  
    var config = {  
        server: 'kinoticketsystem-db-server.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'kinoadmin', //update me
                password: '1234KinoLeonNico5678'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'Kinoticketsystem-DB'  //update me
        }
    }; 
var connection = new Connection(config);  
app.use(function (req, res, next) {
    req.sql = tediousExpress(connection);
    next();
});

router.get('/Products', function (req, res) {
    req.sql("select * from Product for json path")
        .into(res);
});






