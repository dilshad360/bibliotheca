import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/bibliotheca' element={<Home/>} />
      <Route path='/bibliotheca/blog/:id' element={<Blog/>} />
      <Route path='/bibliotheca/about' element={<About/>} />
    </Routes>
  );
}

export default App;
