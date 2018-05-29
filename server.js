const ws = require('ws'); //module for websocket
const mysql = require('mysql'); //module for mysql
const onloadSql = 'SELECT firstname, phonenumber FROM contactlist';
var s = '';


const connectInfo = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
};


//create connection to mysql
const con = mysql.createConnection(connectInfo);
con.connect(function (err) {
   if(err) throw new Error('Fuck');
   console.log('Connected');

    con.query(onloadSql, function (err, res) {
        if(err) throw err;
        s = JSON.stringify(res);
    });
});

//create ws server
const wsServer = new ws.Server({
    port:8081
});

wsServer.on('connection', function (w) {
    w.send(s);
    w.on('message', function (msg1) {
       var str = JSON.parse(msg1);
       con.query("INSERT INTO contactList (firstname, phonenumber)" +
           "VALUES ('" + str.firstname + "', '"+ str.number +"')", function (err, res) {
           if(err) throw new Error("What a hell!");
           con.query(onloadSql, function (err, res) {
               if(err) throw err;
               s = JSON.stringify(res);
           });
       });
    });
});