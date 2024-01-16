import { RouterProvider, createHashRouter, redirect } from 'react-router-dom';
import './App.css';
import About from './Componetes/About/About';
import Childrens from './Componetes/Childrens/Childrens';
import ContactUs from './Componetes/Contact-Us/Contact-Us';
import AddArtical from './Componetes/Dasbord/AddArtical/AddArtical';
import Content from './Componetes/Dasbord/Content/Content';
import HomeDash from './Componetes/Dasbord/HomeDash/HomeDash';
import LayoutDash from './Componetes/Dasbord/LayoutDash/LayoutDash';
import UserArticel from './Componetes/Dasbord/UserArticel/UserArticel';
import Doctors from './Componetes/Doctors/Doctors';
import Home from './Componetes/Home/Home';
import Layout from './Componetes/Layout/Layout';
import Login from './Componetes/Login/Login';
import Notices from './Componetes/Notices/Notices';
import Register from './Componetes/Register/Register';
import RegisterChildren from './Componetes/Register_children/Register_children';
import Artical from './Componetes/artical/artical';

function App() {


  const routers = createHashRouter([
    {
      path: "", element: <Layout />,
      children: [
        { index: true, loader: () => redirect("home") },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <ContactUs /> },
        { path: "registerChildren", element: <RegisterChildren /> },
        { path: "childrens", element: <Childrens /> },
        { path: "doctor", element: <Doctors /> },
        { path: "notices", element: <Notices /> },
        { path: "artical", element: <Artical /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
      ]
    },

    {
      path: "dashbord", element: <LayoutDash />,
      children: [
        { index: true, loader: () => redirect("homedash") },
        {
          path: "homedash", element: <HomeDash />,

          children: [
            { index: true, loader: () => redirect("content") },
            {
              path: "content", element: <Content />,
            },
            { path: "addArtical", element: <AddArtical /> },
            { path: "userArticel", element: <UserArticel /> },
          ]
        },


      ]
    }

  ]);


  return <>
    <RouterProvider router={routers} />
    {/* <Router>
      <Routes>
        <Route >
          <Route index element={<Navigate to="home" />} />
          <Route index element={<Home />} />
          <Route />
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
    </Router> */}
  </>
}

export default App;
