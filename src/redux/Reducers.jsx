import { combineReducers } from "redux";
import Cookies from "js-cookie";

const loginReducer = (state = { authData: null, loading: false, error: false, updateLoading: false }, action) => {
    switch (action.type) {
        case "login_processing": {
            console.log("step 2: login_processing");
            return {...state, loading: true, error: false };
        };
        case "login_success": {
            console.log("step 3: login_success");
            console.log("fetching with request: "+ JSON.stringify(action.data));
            localStorage.setItem("profile", JSON.stringify(action.data));
            Cookies.set("JSONprofile", JSON.stringify(action.data));
            return {...state,  authData: action.data, loading: false, error: false };
        };
        case "login_failed": {
            return {...state, loading: false, error: true };
        };
        default: return state;
    }
};

const registerReducer = (state = { authData: null, loading: false, error: false, updateLoading: false }, action) => {
    switch (action.type) {
        case "register_processing": {
            return {...state, loading: true, error: false };
        };
        case "register_success": {
            localStorage.setItem("profile", JSON.stringify(action.data));
            Cookies.set("JSONprofile", JSON.stringify(action.data));
            return {...state,  authData: action.data, loading: false, error: false };
        };
        case "register_failed": {
            return {...state, loading: false, error: true };
        };
        default: return state;
    }
};

const logoutReducer = (state = { authData: null, loading: false, error: false, updateLoading: false }, action) => {
    switch (action.type) {
        case "logout_processing": {
            return {...state, loading: true, error: false };
        };
        case "logout_success": {
            localStorage.setItem("profile", "");
            Cookies.set("JSONprofile", "");
            return {...state,  authData: action.data, loading: false, error: false };
        };
        case "logout_failed": {
            return {...state, loading: false, error: true };
        };
        default: return state;
    }
};

const postReducer= (state = { posts: null, loading: false, error: false, uploading: false }, action) => {
    switch (action.type) {
        //post
        case "post_processing": {
            return { ...state, error: false, uploading: true };
        };
        case "post_success": {
            return { ...state, posts: [action.data, ...state.posts], uploading: false, error: false };
        };
        case "post_failed": {
            return { ...state, uploading: false, error: true };
        };

        //retrieve
        case "retrieve_processing": {
            return { ...state, loading: true, error: false };
        };
        case "retrieve_success": {
            return { ...state, posts: action.data, loading: false, error: false };
        };
        case "retrieve_failed": {
            return { ...state, loading: false, error: true };
        };
        default: return state;
    }
};

export const reducers= combineReducers({loginReducer, registerReducer, postReducer, logoutReducer});