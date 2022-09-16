import axios from "axios";

const URL= "https://ftunebackend.herokuapp.com/api" ;

export const login= (request)=> axios.post(`${URL}/login`, JSON.stringify(request), {headers: {"Content-Type": "application/json"}});

export const register = (request) => axios.post(`${URL}/register`, JSON.stringify(request), {headers: {"Content-Type": "application/json"}});

export const logout = (token) => axios.post(`${URL}/logout`, {headers: {"Content-Type": "application/json", "authorization": `Bearer ${token}`}});