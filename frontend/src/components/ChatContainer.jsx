import React from "react";
import Messages from "./Messages";
import SendMessage from "./SendMessage";

const ChatContainer = () => {
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <Messages />
            <SendMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
