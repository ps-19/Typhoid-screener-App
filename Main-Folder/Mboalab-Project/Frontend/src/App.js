import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/pages/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Comments from "./components/pages/Comments/Comments";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Login from "./components/pages/Login/Login";
import About from "./components/pages/About/About";
import Register from "./components/pages/Register/Register";
import Terms from "./components/pages/Terms/Terms";
import Services from "./components/pages/Services/Services";
import Blogs from "./components/pages/Blogs/Blogs";
import Page404 from "./components/pages/Page404/Page404";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "./components/pages/Bot/ActionProvider";
import MessageParser from "./components/pages/Bot/MessageParser";
import config from "./components/pages/Bot/config";

function App() {
  const [botOpen, setBotOpen] = useState(false);

  const handleClick = () => setBotOpen(!botOpen);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/comments" element={<Comments />} />
        <Route exact path="/contacts" element={<ContactUs />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <div>
        {botOpen && (
          <div styles={{ maxWidth: "300px" }}>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              className="bot-modal"
            />
          </div>
        )}
      </div>
      <button className="bot-open" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          class="appChatbotButtonIcon_Lq7z"
        >
          <path
            fill="currentcolor"
            d="M192 408h64v-48h-64zm384-216h-32a96 96 0 00-96-96H344V24a24 24 0 00-48 0v72H192a96 96 0 00-96 96H64a48 48 0 00-48 48v128a48 48 0 0048 48h32a96 96 0 0096 96h256a96 96 0 0096-96h32a48 48 0 0048-48V240a48 48 0 00-48-48zM96 368H64V240h32zm400 48a48.14 48.14 0 01-48 48H192a48.14 48.14 0 01-48-48V192a48 48 0 0148-48h256a48 48 0 0148 48zm80-48h-32V240h32zM240 208a48 48 0 1048 48 47.996 47.996 0 00-48-48zm160 0a48 48 0 1048 48 47.996 47.996 0 00-48-48zm-16 200h64v-48h-64zm-96 0h64v-48h-64z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default App;
