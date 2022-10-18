import React from "react";
import MessageContext from "../data/AppContext";
import Message from "./Message";

/**
 *
 * @returns
 */
const Messages = () => {
  const { messages } = MessageContext();
  return (
    <div className="flex flex-col h-full overflow-x-auto mb-4">
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-12 gap-y-2">
          {messages.map((item, index) => (
            <Message key={index} index={index} message={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
