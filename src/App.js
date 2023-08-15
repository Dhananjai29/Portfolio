import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/Home/Home'
import Navbar from './Component/Navbar';
import About from './Page/About/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <div className="body">
        <Routes>
          <Route path='/portfolio' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
