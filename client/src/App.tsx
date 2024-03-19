import './App.css';
import Header from './Components/Layout/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/poppins";
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
