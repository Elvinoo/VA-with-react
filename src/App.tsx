import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/1.HomePage/Home";
import TourPage from "./Pages/4.ToursPage/TourPage";
import AboutUs from "./Pages/3.AboutUs/AboutUs";
import AboutAze from "./Pages/2.AboutAzerbaijan/AboutAze";
import Tour from "./Pages/5.Tour/Tour";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/azerbaijan" element={<AboutAze />} />
          <Route path="/tours" element={<TourPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/singleTour" element={<Tour />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
