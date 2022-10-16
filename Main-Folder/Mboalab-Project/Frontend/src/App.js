import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './components/AboutUs';
import Contact from './components/Contact';
import Service from './components/Service';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Termsofuse from './components/Termsofuse';
import Page404 from './components/Page404';
import Comments from './components/Comments';
import './App.css';

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
        <Route path="*" element={<Page404 />} /> {/* 404 handled */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
