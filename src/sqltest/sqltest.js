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
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });
    
    connection.connect();


