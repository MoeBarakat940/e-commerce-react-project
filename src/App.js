import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { useState } from 'react';
import { Header } from './components/Header';
import { Explore } from './components/Explore'
import { CartList } from './components/CartList';


function App() {
  const [results, setResults] = useState([]);
  const [carts, setCarts] = useState([]);

  return (
    <div className="App">
      
      <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home carts={carts} setCarts={setCarts}/>}/>
            <Route path="/explore" element={<Explore carts={carts} setCarts={setCarts} results={results} setResults={setResults}/>}/>
            <Route path="/cart" element={<CartList carts={carts} setCarts={setCarts}/>}/>
          </Routes>
       </Router>  
          
       
    </div>
  );
}
export default App;
