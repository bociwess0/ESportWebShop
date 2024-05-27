import './App.css';
import Header from './Components/Layout/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/poppins";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCurrentUser } from './DatabaseRequests/Requests';
import { useDispatch } from 'react-redux';
import { User } from './Interfaces/Interface';
import { setCurrentUser } from './Redux/profileSlice';

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if(location.pathname === "/") {
      navigate("/products");
    }

    async function getCurentUserHandler() {
      let currentUser: User = await getCurrentUser();
      if(currentUser) dispatch(setCurrentUser({user: currentUser}));
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
