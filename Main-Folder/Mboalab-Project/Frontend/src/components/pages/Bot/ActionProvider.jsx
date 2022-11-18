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

  const handleJavascriptQuiz = () => {
    const jsmessage = createChatBotMessage(
      "Here are some JavaScript questions",
      {
        widget: "javascriptQuiz",
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
            handleJavascriptQuiz,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
