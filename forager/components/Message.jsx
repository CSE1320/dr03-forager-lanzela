import React from "react";
import { warningMessage } from "../data/development";

const Message = ({ header, message, onClose, type = "danger", hideHeader }) => {
  const typeMessage = type === "success" ? "bg-[#6BC591]" : "bg-[#FF5050]";

  return (
    <div
      className={`message rounded-xl  text-sm w-full font-medium text-white px-4 py-4 ${typeMessage}`}
    >
      <div className={`flex items-center gap-2 mb-3 ${hideHeader ? 'justify-end': 'justify-between'}`}>
        {!hideHeader && (
          <div className="header flex items-center gap-2">
            <img
              width="27px"
              height="27px"
              className=""
              src={warningMessage.icon}
            ></img>
            <h1 className="uppercase text-lg font-bold">
              {header || warningMessage.header || ""}
            </h1>
          </div>
        )}

        {onClose && (
          <button onClick={onClose} className="text-white text-xl">
            ✖
          </button>
        )}
      </div>
      <p className="">{message || warningMessage.message}</p>
    </div>
  );
};

export default Message;