import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Detail from "./containers/Detail";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:country/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
