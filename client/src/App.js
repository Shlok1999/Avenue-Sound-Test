import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
// import {Route, BrowserRouter, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Banner />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
