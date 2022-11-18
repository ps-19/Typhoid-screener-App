import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Check yourself",
      handler: props.actionProvider.handleCheckSelf,
      id: 1,
    },
    { text: "Seek help", handler: () => {}, id: 2 },
    { text: "Report Bug", handler: () => {}, id: 3 },
    { text: "Others", handler: () => {}, id: 4 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
