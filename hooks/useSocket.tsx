import React, { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { io, Socket } from "socket.io-client";

export const useSocket = () => {
  const socketClient = useRef<SocketIOClient.Socket>();

  return <div></div>;
};
