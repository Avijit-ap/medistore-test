import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import { Home } from './component/Home/Home';
import { Login } from './component/login/Login';
import { PageNotFound } from './component/notFound/PageNotFound';


function App() {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
