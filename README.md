# contactList
This client-server apllication just insert into database(MySQL) data that you fill form out and renders it to web-page.
Browser speak with server through WebSocket. Server was created on NodeJS. Client on JS/HTML/CSS.
Before running the application, you need to install a Node JS, WAMP or just MySQL
and install modules for NodeJS such as ws(for WebScoket) and mysql(for MySQL.)
Install ws module looks like: npm install --save ws
Install mysql module looks like: npm install --save mysql
You need create your own database(MySQL) and must be called it as a 'mydb'.
DB consist of 3 columns: id, firstname and phonenumber.
In file server.js you will find this configuration of server.
