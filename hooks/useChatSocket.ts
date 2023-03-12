import { useSocket } from "socket.io-react-hook";

export const useChatSocket = () => {
  return useSocket("http://localhost:5000");
};
