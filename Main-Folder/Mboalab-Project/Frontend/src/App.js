import { Route, Routes, Navigate } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import About from "./pages/About/AboutUs"
import Contact from "./pages/Contact/Contact"
import Service from "./pages/Service/Service"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Login from "./pages/LoginRegister/Login"
import Register from "./pages/LoginRegister/Register"
import Footer from "./components/Footer/Footer"
import Termsofuse from "./pages/Termsofuse/Termsofuse"
import Page404 from "./pages/Page404/Page404"
import Comments from "./pages/Comments/Comments"
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/comments" element={<Comments />} />
        <Route exact path="/terms-of-use" element={<Termsofuse />} />
        <Route path="*" element={<Page404 />} />         {/* 404 handled */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
