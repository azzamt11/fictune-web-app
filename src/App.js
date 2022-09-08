import React from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Cookies from 'js-cookie';

function App() {
  //getting login data from cookies
  const getLoginStatusFromCookies= () => {
    const token= Cookies.get('token');
    if(token==undefined) {
      return false;
    } else {
      return true;
    }
  };

  //returning elements
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path= '/login' element= {<Login/>}/>
          <Route exact path= '/home' element= {<Home value= {{name: Cookies.get('name'), token: Cookies.get('token')}}/>}/>
          <Route exact path= '/' element= {getLoginStatusFromCookies()?  <Navigate to="/home"/> : <Navigate to="/login"/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
