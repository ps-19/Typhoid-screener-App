import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import OnlineCheckup from "./pages/OnlineCheckup/OnlineCheckup";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Termsofuse from "./pages/TermsOfUse/Termsofuse.jsx";
import Page404 from "./pages/404/Page404.jsx";
import Community from "./pages/Community/Community.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/online-checkup" element={<OnlineCheckup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/comments" element={<Community />} />
        <Route exact path="/terms-of-use" element={<Termsofuse />} />
        <Route path="*" element={<Page404 />} /> {/* 404 handled */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
