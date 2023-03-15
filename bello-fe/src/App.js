import './App.css';
import { useState } from 'react';
import {  
  Route,
  Routes
} from "react-router-dom";
import Navigation from './component/Navigation';
import SplashPage from './component/SplashPage';
import Login from './component/Login';
import SignUp from './component/Signup';
import MainPage from './component/MainPage';



function App() {
  // const [isLoaded, setIsLoaded] = useState(false); 
  // if (!isLoaded) {
  //   return null;
  // }

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<><Navigation/> <SplashPage/></>}>   
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/main' element={<MainPage/>}></Route>
      </Routes>
        
    </div>
  );
}

export default App;
