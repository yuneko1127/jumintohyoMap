import React from 'react';
import Map from './Map';
import Header from './Header'; // Headerコンポーネントをインポート
import Footer from './Footer'; // Footerコンポーネントをインポート
import About from './About'; // About コンポーネントをインポート
import './App.css';

function App() {
  return (
    <div className="Map_page">
      <Header />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
