import axios from "axios";

const URL= "https://ftunebackend.herokuapp.com/api" ;

export const getPosts= (token)=> axios.post(`${URL}/posts/attributenumber/5/number/5`, {}, {headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`, Accept: "application/json"}});