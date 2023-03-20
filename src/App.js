import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import '../src/App.css'
import Footer from './Components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/menu' element={<Menu/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>

         
       </Routes>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
