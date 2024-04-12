import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import { Nav } from './Components/Nav';
import MyTabs from './Screens/ex';
import Dash from './Screens/Dash';
import MenuComponent from './Screens/ex';




function App() {
  return (
    <div><Nav />
      <Routes>
        <Route path='/' element={<Dash />}></Route>
        <Route path='/a' element={<MenuComponent />}></Route>

      </Routes>
    </div>
  );
}

export default App;
