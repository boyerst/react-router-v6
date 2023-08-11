import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}


function App() {
  return (
    <div className="App">
     
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
          Home
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
          About
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}


function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}






export default App;
