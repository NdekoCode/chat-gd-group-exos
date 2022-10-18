import { createContext, memo, useContext, useEffect, useState } from "react";

const AppContext = createContext();
export const ContextProvider = memo(({ children }) => {
  const [messages, setMessages] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const value = {
    messages,
    setMessages,
  };
  useEffect(() => {
    (async () => {
      if (isLoading) {
        const response = await fetch("http://localhost:9000");
        const responseData = await response.json();
        console.log(responseData);
        setMessages(responseData?.messages);
        setIsLoading(false);
      }
    })();
  }, [isLoading]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
});
const MessageContext = () => useContext(AppContext);
export default MessageContext;
