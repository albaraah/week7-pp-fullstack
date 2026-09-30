import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import EditProductPage from "./pages/EditProductPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.token ? true : false;
  }); return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={isAuthenticated ? <AddProductPage /> : <Navigate to="/signup" />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/products/:id" element={<ProductPage isAuthenticated={isAuthenticated} />}
            />
            <Route path="/edit/:id" element={isAuthenticated ? <EditProductPage /> : <Navigate to="/signup" />} />
            <Route
              path="/signup"
              element={
                isAuthenticated ? (
                  <Navigate to="/" />
                ) : (
                  <Signup setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />

            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/" />
                ) : (
                  <Login setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;