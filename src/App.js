import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import userContext from "./components/Mycontext/userContext";
import Products from "./components/Products/Products";
import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories/Categories";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NotFound from "./components/notfound/NotFound";
import SignAndRegRoute from "./components/SignAndRegRoute/SignAndRegRoute";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  const [token, setToken] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("userToken"))
      setToken(localStorage.getItem("userToken"));
  }, []);

  return (
    <>
      <BrowserRouter>
        <userContext.Provider value={{ token, setToken }}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <SignAndRegRoute>
                  <SignUp />
                </SignAndRegRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <SignAndRegRoute>
                  <SignIn />
                </SignAndRegRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route
              path="/brands"
              element={
                <ProtectedRoute>
                  <Brands />
                </ProtectedRoute>
              }
            />
            <Route
              path="/categories"
              element={
                <ProtectedRoute>
                  <Categories />
                </ProtectedRoute>
              }
            />
            <Route path="/Product/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
