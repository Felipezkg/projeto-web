import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//-----------------------------------------------------------------------------------------------------
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Inicio from './Pages/Inicio/Inicio';
//-----------------------------------------------------------------------------------------------------
import './Styles/Global.css';
//-----------------------------------------------------------------------------------------------------
import { initializeApp } from 'firebase/app';
import firebaseConfig from './Config/firebaseConfig';

initializeApp(firebaseConfig);
//-----------------------------------------------------------------------------------------------------
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Inicio' element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;
