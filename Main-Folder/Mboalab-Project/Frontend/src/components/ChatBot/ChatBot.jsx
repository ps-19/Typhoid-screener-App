import React, { useState } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import "./ChatBot.scss";

const ChatBot = () => {
  const [dialogState, setDialogState] = useState(false);
  console.log(dialogState);

  return (
    <>
      {/* <div className="hero__chat-close">
        <button
          onClick={() => {
            setDialogState(!dialogState);
          }}
        >
          
        </button>
      </div> */}
      <div className={dialogState ? "hero__chat-box active" : "hero__chat-box"}>
        <iframe
          width="350"
          height="450"
          allow="microphone"
          src="https://console.dialogflow.com/api-client/demo/embedded/healthybot"
        ></iframe>
      </div>

      <div
        className="hero__chat-icon"
        onClick={() => {
          setDialogState(!dialogState);
        }}
      >
        {dialogState ? <TfiClose /> : <BsChatDotsFill />}
      </div>
    </>
  );
};

export default ChatBot;
