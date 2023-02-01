import { BrowserRouter, Routes, Route, } from "react-router-dom";
import NavigationBar from './components/Navigation/NavigationBar';
import Home from './views/Home/Home'
import './Styles/general.scss'
import Footer from "./components/Footer/Footer";
import OurTeam from "./views/OurTeam/OurTeam";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" exact component element={<Home />} />
          <Route path="/about-us" exact component element={<OurTeam />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
