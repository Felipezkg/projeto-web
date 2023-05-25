import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './Styles/Global.css';

import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
