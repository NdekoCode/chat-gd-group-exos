import React from "react";

const Message = ({ index, message }) => {
  const classBody =
    index % 2 === 0 ? "col-start-1 col-end-8" : "col-start-6 col-end-13";
  const classContent =
    index % 2 === 0 ? "flex-row" : "justify-start flex-row-reverse";
  const classMsg = index % 2 === 0 ? "ml-3 bg-white " : "mr-3 bg-indigo-100";
  return (
    <div className={`${classBody} p-3 rounded-lg`}>
      <div className={`flex ${classContent} items-center`}>
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          {index % 2 === 0 ? "A" : "B"}
        </div>
        <div
          className={`relative ${classMsg} text-sm  py-2 px-4 shadow rounded-xl`}
        >
          <div>{message.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
