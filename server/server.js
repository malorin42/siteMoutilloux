
// const socketManager = require('./socketManager')
// const SocketHandler = require('./SocketHandler')
const express = require("express");
// const app = express();
const port = 4000;
const mysql = require("mysql");

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'siteTournois'
})

db.connect(function(err){
  if (err) console.log(err)
})


function callback (result){
  return result;
};

// io.on("connection", socket => {
//     console.log("A client connect !")
// });
class SocketHandler {
  constructor (socket) {
      this.socket = socket
      this.id = socket.id
  }

  ping_client(data) {
    this.socket.emit("SERVER_PING", data);
  }
}

class SocketManager {

  constructor() {
      this.io = undefined
      this.sockets = new Map()
      console.log("socketManager constructor")
  }

  addIO(io) {
      this.io = io
  }

  addSocket(socket) {
      this.sockets.set(socket.id, { socket })
  }

  registerSocket(socket, userName) {
      this.sockets.set(socket.id, { socket, userName })
  }

  removeSocket(socket) {
      this.sockets.delete(socket.id)
  }

  getSocketByUserName(userName) {
      return (this.sockets.find(socket => socket.userName === userName))
  }
}

class Server {

  handleConnection(socket) {
        
    console.log('client connected...', socket.id)
    console.log("socketManager before = ", this.socketManager)
    this.socketManager.addSocket(socket)
    console.log("socketManager after = ", this.socketManager)

    const socketHandler = new SocketHandler(socket)

    socket.on('disconnect', function () {
        console.log('client disconnect...', socket.id)
        // handleDisconnect()
    })

    
    socket.on('PING', function(data) {
      console.log("PING");
      var rep = "Message emit : " + data;
      socketHandler.ping_client(rep);
  });

  socket.on("GET_TABLE_DATA" , function(tableName) {
    var query = "SELECT * FROM " + tableName;

    console.log("New Query : " + query)
    db.query(query, function(err, result) {
      if(err) {
        throw new Error('Failed');
      }
      console.log("result : ", result)
      socket.emit("GET_TABLE_RETURN", result);
    });
  });

  socket.on("USER_CONNECT", function (data, callback) {
    var query = "SELECT * FROM users WHERE name = '" + data.userName + "'";

    console.log("New Query : " + query)
    db.query(query, function(err, result) {
      if(err) {
        callback(err)
        throw new Error('Failed');
      }
      console.log("result : ", {id: result[0].id, name: result[0].name})
      
      callback({id: result[0].id, name: result[0].name})
    });
  })

}

  start(port){
    const app = express()
    const server = app.listen(`${port}`, '0.0.0.0', function() {
      console.log(`Server started on port ${port}`);
    });

    const io = require("socket.io")(server);

    this.socketManager = new SocketManager()

    io.on('connection', (socket) => this.handleConnection(socket))

  }
}

const server = new Server().start(port)
