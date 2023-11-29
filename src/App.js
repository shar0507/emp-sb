import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AddEmp from './components/AddEmp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/addemp" element={<AddEmp />}></Route>

      </Routes>
   

      </Router>
      
      
    </div>
  );
}

export default App;
