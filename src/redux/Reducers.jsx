import Cookies from "js-cookie";

const reducers = (state = { authData: null, loading: false, error: false, updateLoading: false }, action) => {
    switch (action.type) {
        //login
        case "login_processing":
            return {...state, loading: true, error: false };
        case "login_success": 
            console.log("step 3: login_success");
            console.log("fetching with request: "+ JSON.stringify(action.data));
            localStorage.setItem("profile", JSON.stringify(action.data));
            Cookies.set("token", action.data.token);
            Cookies.set("name", action.data.user.name);
            return {...state,  authData: action.data, loading: false, error: false };
        case "login_failed":
            return {...state, loading: false, error: true };

        //register
        case "register_processing":
            return {...state, loading: true, error: false };
        case "register_success": 
            localStorage.setItem("profile", JSON.stringify(action.data));
            Cookies.set("token", action.data.token);
            Cookies.set("name", action.data.user.name);
            return {...state,  authData: action.data, loading: false, error: false };
        case "register_failed":
            return {...state, loading: false, error: true };

        //logout
        case "logout_fetched":
            Cookies.remove("token");
            return {...state,  authData: null, loading: false, error: false, updateLoading: false };
        case "logout_unfetched":
            Cookies.remove("token");
            return {...state, authData: null, loading: false, error: false, updateLoading: false };

        //post
        case "post_processing":
            return { ...state, error: false, uploading: true };
        case "post_success":
            return { ...state, posts: [action.data, ...state.posts], uploading: false, error: false };
        case "post_failed":
            return { ...state, uploading: false, error: true };

        //retrieve
        case "retrieve_processing":
            return { ...state, loading: true, error: false };
        case "retrieve_success":
            return { ...state, posts: action.data, loading: false, error: false };
        case "retrieve_failed":
            return { ...state, loading: false, error: true };
        default: return state;
    }
};

export default reducers;