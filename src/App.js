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
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />}>Home</Route>
          <Route path={"/product/:name"} element={<ProductPage />}>Product Page</Route>
          <Route path={"/about"} element={<About />}>About Us Page</Route>
          <Route path={"/recs"} element={<WeeklyRecs />}>Weekly Recs Page</Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
