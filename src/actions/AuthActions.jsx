import * as AuthApi from "../apiClient/AuthApi";

export const login= (inputData, navigate)=> async(dispatch)=> {
    dispatch({type: "login_processing"});
    try {
        console.log("step 3.0: login fetch in progress with request"+ JSON.stringify(inputData));
        const {data}= await AuthApi.login(inputData);
        dispatch({type: "login_success", data: data});
        navigate("/home", {replace: true});
    } catch(e) {
        console.log(e);
        dispatch({type: "login_failed"});
    }
};

export const register= (inputData, navigate)=> async(dispatch)=> {
    dispatch({type: "register_processing"});
    try {
        const {data}= await AuthApi.register(inputData);
        dispatch({type: "register_success", data: data});
        navigate("/home", {replace: true});
    } catch(e) {
        console.log(e);
        dispatch({type: "register_failed"});
    }
};

export const logout= async(token, navigate)=> async(dispatch)=> {
    dispatch({type: "logout_processing"});
    try {
        dispatch({type: "logout_success"});
        navigate("/login", {replace: true});
        const {response}= await AuthApi.logout(token);
        alert(response.toString());
    } catch(e) {
        console.log(e);
        dispatch({type: "logout_failed"});
    }
};






















