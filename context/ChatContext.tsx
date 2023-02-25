import { createContext, useContext, useReducer } from "react";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { User, userInfo } from "../typing";

type ChatState = {
  chatId: string;
  user: userInfo | null;
};

type ChatAction = {
  type: "CHANGE_USER";
  payload: userInfo;
};

type ChatContextType = {
  data: ChatState | null;
  dispatch: React.Dispatch<ChatAction>;
};

type Props = {
  children: React.ReactNode;
};

export const ChatContext = createContext<ChatContextType>({
  data: null,
  dispatch: () => {},
});

const ChatContextProvider = ({ children }: Props) => {
  const { loggedUser } = useTypedSelector((state) => state.users);
  const INITIAL_STATE: ChatState = {
    chatId: "null",
    user: null,
  };

  const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
    switch (action.type) {
      case "CHANGE_USER":
        if (loggedUser) {
          return {
            user: action.payload,
            chatId:
              loggedUser.id > action.payload.id
                ? loggedUser.id + action.payload.id
                : action.payload.id + loggedUser.id,
          };
        }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
