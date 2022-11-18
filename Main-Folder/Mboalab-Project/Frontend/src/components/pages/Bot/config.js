import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options/Options";
import Quiz from "./Quiz/Quiz";

const botName = "Jesper";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I am ${botName}, the MboaLab Assistant`, {
      widget: "options",
    }),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#2591A8",
    },
    chatButton: {
      backgroundColor: "#2591A8",
    },
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is JavaScript",
            answer: "Javascript is awesome",
            id: 1,
          },
          {
            question: "What are Classes",
            answer: "Classes are nice",
            id: 2,
          },
          {
            question: "What are Objects",
            answer: "Objects are many",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
