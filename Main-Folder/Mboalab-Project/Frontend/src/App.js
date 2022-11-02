import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/comments" element={<Comments />} />
        <Route exact path="/contacts" element={<ContactUs />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Page404 />} />
      </Routes> */}
    </div>
  );
}

export default App;
