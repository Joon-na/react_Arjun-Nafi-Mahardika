import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import CreateProduct from './components/CreateProduct';
import ProductDetail from './components/ProductDetail';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;