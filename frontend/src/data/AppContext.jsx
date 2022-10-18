import { createContext, memo, useContext, useState } from "react";

const AppContext = createContext();
export const ContextProvider = memo(({ children }) => {
  const [messages, setMessages] = useState([{}]);
  const value = {
    messages,
    setMessages,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
});
const MessageContext = () => useContext(AppContext);
export default MessageContext;
