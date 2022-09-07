import React, {useState, useEffect} from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import {UserProvider, UserConsumer} from './utils/UserContext';

function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  const [user, setUser]= useState({name: '', imageString: '', token: ''});

  return (
    <UserProvider value= {{user: user, setUser: (value)=> setUser(value)}}>
      <BrowserRouter>
        <Routes>
          <Route exact path= '/login' element= {<Login/>}/>
          <Route exact path= '/home' element= {<Home/>}/>
          <Route exact path= '/' element= {isLoggedIn?  <Navigate to="/home"/> : <Navigate to="/login"/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
