import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");
    const newMessage = createChatBotMessage("Do you wish to assess yourself?");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage, botMessage],
    }));
  };

  const handleCheckSelf = () => {
    const jsmessage = createChatBotMessage(
      "Thanks for the reply, please click the button below to check yourself",
      {
        widget: "assessSelf",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, jsmessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleCheckSelf,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
