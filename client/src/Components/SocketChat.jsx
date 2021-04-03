import React from 'react'

//import Lib
import { io } from "socket.io-client";


const SocketChat = () => {
  const socket = io('http://localhost:5001');
  socket.on("connect", () => {
    console.log(socket.connected); 
  });

  socket.on("disconnect", () => {
    console.log(socket.connected); 
  });

  return (
    <div>

    </div>
  );
}

export default SocketChat;