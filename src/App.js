import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Cookies from "js-cookie";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutDeveloper from "./pages/AboutDeveloper";
import Chat from "./pages/Chat";
import RecommendedNovels from "./pages/RecommendedNovels";
import MyFavoriteNovels from "./pages/MyFavoriteNovels";
import MyNovels from "./pages/MyNovels";
import Help from "./pages/Help";
import Setting from "./pages/Setting";

function App() {
  //user checking
  const user= useSelector((state)=> state.authData);
  const token= Cookies.get("token");

  //rendering
  return (
    <Routes>
      <Route exact path= "/" element= {user && token? <Navigate to= "/home"/>: <Navigate to= "/login"/>}/>
      <Route exact path= "/home" element= {user && token? <Home user= {user}/>: <Navigate to= "/login"/>}>
        <Route path= '' element= {user && token? <RecommendedNovels token= {user.token}/> : <Navigate to = "/login"/>}/>
        <Route path= 'my-favorite-novels' element= {user && token? <MyFavoriteNovels/> : <Navigate to= "/login"/>}/>
        <Route path= 'my-novels' element= {user && token? <MyNovels/>: <Navigate to= "/login"/>}/>
        <Route path= 'help' element= {user && token? <Help/> : <Navigate to= "/login"/>}/>
        <Route path= 'setting' element= {user && token? <Setting/>: <Navigate tp="/login"/>}/>
      </Route>
      <Route path= "/login" element= {user && token? <Navigate to= "/home"/>: <Login/>}/>
      <Route path= "/register" element= {user && token? <Navigate to="/home"/>: <Register/>}/>
      <Route exact path= "/about-developer" element= {user && token? <AboutDeveloper/>: <Navigate to= "login"/>}/>
      <Route exact path= "/chat" element= {user && token? <Chat/>: <Navigate to= "/login"/>}/>
    </Routes>
  );
}

export default App;
