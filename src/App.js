import { BrowserRouter, Routes, Route, } from "react-router-dom";
import NavigationBar from './components/Navigation/NavigationBar';
import Home from './views/Home/Home'
import './Styles/general.scss'
import Footer from "./components/Footer/Footer";
import OurTeam from "./views/OurTeam/OurTeam";
import Services from "./views/Services/Services";
import Gallery from "./views/Gallery/Gallery";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./views/Contact/Contact";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavigationBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact component element={<Home />} />
          <Route path="/our-team" exact component element={<OurTeam />} />
          <Route path="/services" exact component element={<Services />} />
          <Route path="/gallery" exact component element={<Gallery />} />
          <Route path="/testimonials" exact component element={<Services />} />
          <Route path="/contact" exact component element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
