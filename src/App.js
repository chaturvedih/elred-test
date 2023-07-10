import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainScreen from "./layout/MainScreen";
import EditAboutMe from './layout/EditAboutMe';
import './App.css'

function App() {
  return (
    <div className="profile__container">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen/>} />
        <Route path='/edit/about-me' element={<EditAboutMe/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
