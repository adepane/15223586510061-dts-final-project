import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NewsLetter from "./components/Newsletter/Newsletter";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Detail from "./containers/Detail";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Register from "./containers/Register";
import Search from "./containers/Search";
import Wishlist from "./containers/Wishlist";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/my-list"
          element={
            <ProtectedRoute loginOnly={true}>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hotel/:country/:id"
          element={
            <ProtectedRoute loginOnly={true}>
              <Detail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute loginOnly={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute loginOnly={false}>
              <Register />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <NewsLetter />
      )}
      <Footer />
    </div>
  );
}

export default App;
