import './App.css';
import Header from './Components/Layout/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/poppins";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCurrentUser } from './DatabaseRequests/Requests';

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(location.pathname === "/") {
      navigate("/products");
    }

    async function getCurentUserHandler() {
      let currentUser = await getCurrentUser();
    }

    getCurentUserHandler();

  }, [])

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
