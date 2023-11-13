import './App.css';
import Homepage from './components/Pages/Homepage';
import Login from './components/Authentication/Login';
import Mainpage from './components/Pages/mainpage'
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
      
    </div>

  );
}

export default App;
