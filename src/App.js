import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import WeeklyRecs from './pages/WeeklyRecs';
import NavBar from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<><NavBar /><Home /><Footer /></>}>Home</Route>
          <Route path={"/product/:name"} element={<><NavBar /><ProductPage /><Footer /></>}>Product Page</Route>
          <Route path={"/about"} element={<><NavBar /><About /><Footer /></>}>About Us Page</Route>
          <Route path={"/recs"} element={<><NavBar /><WeeklyRecs /><Footer /></>}>Weekly Recs Page</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
