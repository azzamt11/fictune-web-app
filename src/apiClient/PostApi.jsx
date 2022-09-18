import axios from "axios";

const URL= "https://ftunebackend.herokuapp.com/api" ;

export const getPosts= (token)=> axios.post(`${URL}/posts/attributenumber/10/number/10`, {}, {headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`, Accept: "application/json"}});

export const getLikedPosts= (token)=> axios.post(`${URL}/posts/likedposts`, {}, {headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`, Accept: "application/json"}});