import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import MessageContext from "../data/AppContext";

const SendMessage = () => {
  const { messages, setMessages } = MessageContext();
  const [value, setValue] = useState("");
  const handleChange = (evt) => {
    if (evt.key === "Enter") {
      sendMsg(evt);
    } else {
      setValue(evt.target.value);
      console.log(evt.target.value);
    }
  };
  const sendMsg = useCallback((evt) => {
    if (evt) {
      evt.preventDefault();
    }
    if (value.toString().trim().length > 2) {
      setMessages((message) => [
        ...message,
        { id: Date.now(), content: value, created_at: new Date().getTime() },
      ]);
      (async () => {
        const response = await fetch("http://localhost:9000", {
          method: "POST",
          body: JSON.stringify({ messages }),
        });
      })();
      setValue("");
    } else {
      alert("Entrer un message valide");
    }
  });
  return (
    <form
      method="POST"
      onSubmit={sendMsg}
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div>
        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
        </button>
      </div>
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            type="text"
            value={value}
            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            onKeyDown={handleChange}
            onChange={handleChange}
          />
          <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="ml-4">
        <button
          className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
          onClick={sendMsg}
        >
          <span>Envoyer</span>
          <span className="ml-2">
            <svg
              className="w-4 h-4 transform rotate-45 -mt-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default SendMessage;
