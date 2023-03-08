import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './component/Navigation';
import SplashPage from './component/SplashPage';
import Login from './component/Login';



function App() {
  // const [isLoaded, setIsLoaded] = useState(false); 
  // if (!isLoaded) {
  //   return null;
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Navigation/>
            <SplashPage />            
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
