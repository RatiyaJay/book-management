import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import AddBook from "./pages/AddBook";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const PrivateRoute = ({ children }) => {
    const token =
      useSelector((state) => state.auth.token) || localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
  };
  return (
    <Router>
      <Navigation />
      <Container className="mt-3">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/add-book"
            element={
              <ProtectedRoute>
                <AddBook />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Container>
      {/* ToastContainer added here to make it globally available */}
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
};

export default App;
