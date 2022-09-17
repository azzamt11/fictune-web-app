import * as AuthApi from "../apiClient/AuthApi";
import Cookies from "js-cookie";

export const login= (inputData, navigate)=> async(dispatch)=> {
    dispatch({type: "login_processing"});
    try {
        console.log("step 3.0: login fetch in progress with request"+ JSON.stringify(inputData));
        const {data}= await AuthApi.login(inputData);
        Cookies.set("token", inputData.token);
        dispatch({type: "login_success", data: data});
        navigate("/home", {replace: true});
    } catch(e) {
        console.log(e);
        if(e.response.data===undefined) {
            alert("Opps.. Sepertnya koneksi internetmu bermasalah. Silahkan coba lagi setelah koneksi internetmu pulih.");
            dispatch({type: "login_failed"});
        } else {
            if (e.response.data.message==="invalid credentials") {
                alert("Opps.. Sepertnya email atau password yang kamu masukkan tidak valid. Silahkan masukkan ulang.");
                document.getElementById("emailInput").value= "";
                document.getElementById("passwordInput").value= "";
                dispatch({type: "login_failed"});
            } else {
                alert("Opps.. Sepertnya sepertinya server kami mengalami error. Deskripsi Error:"+ e.response.data.message);
                dispatch({type: "login_failed"});
            }
        }
    }
};

export const register= (inputData, navigate)=> async(dispatch)=> {
    dispatch({type: "register_processing"});
    try {
        const {data}= await AuthApi.register(inputData);
        alert(data);
        Cookies.set("token", inputData.token);
        dispatch({type: "register_success", data: data});
        navigate("/home", {replace: true});
    } catch(e) {
        console.log(e);
        dispatch({type: "register_failed"});
    }
};

export const logout= (inputData, navigate)=> async(dispatch)=> {
    if (window.confirm("Apakah kamu yakin ingin keluar?")===true) {
        dispatch({type: "logout_processing"});
        try {
            console.log(inputData.token);
            const {response}= await AuthApi.logout(inputData.token);
            console.log(response);
            dispatch({type: "logout_fetched"});
            Cookies.remove("token");
            navigate("/login", {replace: true});
        } catch(e) {
            console.log(e);
            dispatch({type: "logout_unfetched"});
            Cookies.remove("token");
            navigate("/login", {replace: true});
            console.log("logout unfetched");
        }
    }
};






















