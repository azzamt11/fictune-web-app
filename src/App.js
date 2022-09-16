import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutDeveloper from "./pages/AboutDeveloper";
import {useSelector} from "react-redux";
import Chat from "./pages/Chat";
import RecommendedNovels from "./pages/RecommendedNovels";
import MyFavoriteNovels from "./pages/MyFavoriteNovels";
import MyNovels from "./pages/MyNovels";
import Help from "./pages/Help";
import Setting from "./pages/Setting";

function App() {
  //user checking
  const loggedinUser= useSelector((state)=> state.loginReducer.authData);
  const registeredUser= useSelector((state)=> state.registerReducer.authData);
  const userFromAuth= loggedinUser? loggedinUser : registeredUser;
  const userFromCookies= Cookies.get("JSONprofile");
  const user= userFromAuth? userFromAuth : userFromCookies;

  //rendering
  return (
    <Routes>
      <Route exact path= "/" element= {user? <Navigate to= "/home"/>: <Navigate to= "/login"/>}/>
      <Route exact path= "/home/" element= {user? <Home user= {user}/>: <Navigate to= "/login"/>}>
        <Route path= '' element= {user? <RecommendedNovels/> : <Navigate to = "/login"/>}/>
        <Route path= 'my-favorite-novels' element= {user? <MyFavoriteNovels/> : <Navigate to= "/login"/>}/>
        <Route path= 'my-novels' element= {user? <MyNovels/>: <Navigate to= "/login"/>}/>
        <Route path= 'help' element= {user? <Help/> : <Navigate to= "/login"/>}/>
        <Route path= 'setting' element= {user? <Setting/>: <Navigate tp="/login"/>}/>
      </Route>
      <Route exact path= "/login" element= {user? <Login/>: <Login/>}/>
      <Route path= "/register" element= {user? <Register/>: <Register/>}/>
      <Route exact path= "/about-developer" element= {user? <AboutDeveloper/>: <Navigate to= "login"/>}/>
      <Route exact path= "/chat" element= {user? <Chat/>: <Navigate to= "/login"/>}/>
    </Routes>
  );
}

export default App;
