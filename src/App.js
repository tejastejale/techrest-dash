import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Nav } from './Components/Nav';
import Dash from './Screens/Dash';
import Auth from './Screens/Auth';
import { useEffect } from 'react';

function App() {
  const usenavigate = useNavigate();
  useEffect(() => {
    let username = localStorage.getItem("username");
    if (username === '' || username === null) {
      usenavigate("/auth")
    }
  }, []);
  return (
    <div><Nav />
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
