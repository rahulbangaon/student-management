import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Students from './pages/Students/Students';
import Navbar from './components/navbar/Navbar';
import EditStudent from './pages/editStudent/EditStudent';
import Search from './pages/Search/Search';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/students' element={<Students/>} />
        <Route path='/editStudent/:id' element={<EditStudent/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
