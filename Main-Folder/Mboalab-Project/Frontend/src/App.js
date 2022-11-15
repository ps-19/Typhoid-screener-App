import { Route, Routes, Navigate } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import About from "./components/AboutUs"
import Contact from "./components/Contact"
import Service from "./components/Service"
import Home from "./routes/home/home.jsx"
import Navbar from "./components/navigation-bar/navbar"
import Login from "./components/Login"
import Register from "./components/Register"
import Footer from "./components/Footer"
import Termsofuse from "./components/Termsofuse"
import Page404 from "./components/Page404"
import Comments from "./components/Comments"

import './App.css'

function App() {
  return (
    <div className="">
    <Navbar />
    <div>
    <Routes>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/service" element={<Service />} />
    <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/terms-of-use" element={<Termsofuse />} />
      <Route path="*" element={<Page404 />} />         {/* 404 handled */}
      </Routes>
      </div>
     <Footer />
      </div>
      
      
        );
      }
export default App
      
      // <Route  path="/home" element={<Home />} />