
// Azure SQL DB
const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "kinoadmin", // update me
      password: "1234KinoLeonNico5678" // update me
    },
    type: "default"
  },
  server: "kinoticketsystem-db-server.database.windows.net", // update me
  options: {
    database: "Kinoticketsystem-DB", //update me
    encrypt: true
  }
};

const connection = new Connection(config);


// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
    Console.log("hello")
    queryDatabase();
 /*
    if (err) {
    console.error(err.message);
    
  } else {
      
    queryDatabase();
    console.log("Read from db")
  }
*/});

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT *     
     FROM dbo.Person
    `,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}
queryDatabase()