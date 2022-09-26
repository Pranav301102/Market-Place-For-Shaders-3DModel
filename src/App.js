
import './App.css';

import Home from './Pages/Home/Index';
import Navbar from './Component/Navbar/Navbar';
import LoginPage from './Pages/Login/Index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/login" element={<LoginPage/>} />
    </Routes> 
    </Router>
  )

}

export default App;
