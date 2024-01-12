import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Componetes/About/About';
import Childrens from './Componetes/Childrens/Childrens';
import ContactUs from './Componetes/Contact-Us/Contact-Us';
import Doctors from './Componetes/Doctors/Doctors';
import Home from './Componetes/Home/Home';
import Layout from './Componetes/Layout/Layout';
import Login from './Componetes/Login/Login';
import Notices from './Componetes/Notices/Notices';
import Register from './Componetes/Register/Register';
import RegisterChildren from './Componetes/Register_children/Register_children';
import Artical from './Componetes/artical/artical';

function App() {





  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="home" element={<About />} />
          <Route path="home" element={<ContactUs />} />
          <Route path="registerChildren" element={<RegisterChildren />} />
          <Route path="childrens" element={<Childrens />} />
          <Route path="doctor" element={<Doctors />} />
          <Route path="notices" element={<Notices />} />
          <Route path="artical" element={<Artical />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  </>
}

export default App;
