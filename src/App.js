import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Book from './pages/Book';
import Write from './pages/Write';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blog/:id' element={<Blog/>} />
      <Route path='/book/:id' element={<Book/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/write' element={<Write/>} />
    </Routes>
  );
}

export default App;
