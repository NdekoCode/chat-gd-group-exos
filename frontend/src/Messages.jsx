import React from "react";
import { useState } from "react";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      id: Date.now(),
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nam porro consequuntur voluptates, quibusdam laboriosam quia optio possimus quidem, recusandae quasi consequatur amet vitae aperiam! Consequatur quos quia quibusdam inventore.",
      created_at: new Date().getTime(),
    },
    {
      id: Date.now(),
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nam porro consequuntur voluptates, quibusdam laboriosam quia optio possimus quidem, recusandae quasi consequatur amet vitae aperiam! Consequatur quos quia quibusdam inventore.",
      created_at: new Date().getTime(),
    },
    {
      id: Date.now(),
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nam porro consequuntur voluptates, quibusdam laboriosam quia optio possimus quidem, recusandae quasi consequatur amet vitae aperiam! Consequatur quos quia quibusdam inventore.",
      created_at: new Date().getTime(),
    },
    {
      id: Date.now(),
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nam porro consequuntur voluptates, quibusdam laboriosam quia optio possimus quidem, recusandae quasi consequatur amet vitae aperiam! Consequatur quos quia quibusdam inventore.",
      created_at: new Date().getTime(),
    },
    {
      id: Date.now(),
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nam porro consequuntur voluptates, quibusdam laboriosam quia optio possimus quidem, recusandae quasi consequatur amet vitae aperiam! Consequatur quos quia quibusdam inventore.",
      created_at: new Date().getTime(),
    },
    {
      id: Date.now(),
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nam porro consequuntur voluptates, quibusdam laboriosam quia optio possimus quidem, recusandae quasi consequatur amet vitae aperiam! Consequatur quos quia quibusdam inventore.",
      created_at: new Date().getTime(),
    },
    {
      id: Date.now(),
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nam porro consequuntur voluptates, quibusdam laboriosam quia optio possimus quidem, recusandae quasi consequatur amet vitae aperiam! Consequatur quos quia quibusdam inventore.",
      created_at: new Date().getTime(),
    },
    {
      id: Date.now(),
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nam porro consequuntur voluptates, quibusdam laboriosam quia optio possimus quidem, recusandae quasi consequatur amet vitae aperiam! Consequatur quos quia quibusdam inventore.",
      created_at: new Date().getTime(),
    },
    {
      id: Date.now(),
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nam porro consequuntur voluptates, quibusdam laboriosam quia optio possimus quidem, recusandae quasi consequatur amet vitae aperiam! Consequatur quos quia quibusdam inventore.",
      created_at: new Date().getTime(),
    },
  ]);
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
