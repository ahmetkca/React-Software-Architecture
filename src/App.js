import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import { Layout } from './components/Layout';

function App() {
  return (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="articles" element={<Articles />} />
      </Route>
    </Routes>
  );
}

export default App;
