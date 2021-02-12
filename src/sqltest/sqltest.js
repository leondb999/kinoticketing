
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
  var sql = "SELECT * FROM Person;"

  function request_sql(sql){
      var result
      connection.on('connect', function(err) {  
      // If no error, then good to proceed.  
      console.log("Connected");  

      result = executeStatement(sql);  
    });  
    return result
  }

    
    connection.connect();
 
  
    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
  
    function executeStatement(sql) {  
        request = new Request(sql, function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        connection.execSql(request);  
    }
    