import React from 'react';
import { Routes, Route } from "react-router-dom";
import Map from './Map';
import Header from './Header'; // Headerコンポーネントをインポート
import Footer from './Footer'; // Footerコンポーネントをインポート
import About from './About'; // About コンポーネントをインポート
import Contact from './Contact'; // Home コンポーネントをインポート
import './App.css';

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/jumintohyoMap/" element={<Map />} />
        <Route path="/jumintohyoMap/about" element={<About />} />
        <Route path="/jumintohyoMap/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
