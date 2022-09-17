import React, {useRef} from 'react';
import styled from "styled-components";
import {login} from "../actions/AuthActions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


function Login() {
    //reference declaration
    const emailRef= useRef("");
    const passwordRef= useRef("");

    //react-redux declaration
    const loading= useSelector((state)=> state.loading);
    const navigate= useNavigate();
    const dispatch= useDispatch();

    //useState declaration

    //login click function
    const loginClickFunction= ()=>{
        console.log("step 1: login click function in progress");
        var dataOnSubmit= {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        dispatch(login(dataOnSubmit, navigate));
    };

    //register click function
    const registerClickFunction= ()=> {
        console.log("click register");
        navigate("/register");
    }

    //google click function
    const googleClickFunction= ()=> {
        //to do something.
    }

    //facebok click function
    const facebookClickFunction= ()=> {
        //todo something.
    }
    
    //rendering
    return (
        <Container id= "container">
            <SubContainer>
                <Span>Login ke Fictune</Span>
                <TextField hiddenLabel id="emailInput" defaultValue="" ref= {emailRef}/>
                <UnderLine></UnderLine>
                <PasswordTextField hiddenLabel id="passwordInput" defaultValue="" ref= {passwordRef}/>
                <UnderLine></UnderLine>
                <Button onClick= {loginClickFunction}>{loading? "Loading..." : "Login"}</Button>
                <LoginSpan>atau login dengan akun google atau facebook:</LoginSpan>
                <LoginButtonContainer>
                    <GoogleCircularButton onClick= {googleClickFunction}></GoogleCircularButton>
                    <FacebookCircularButton onClick= {facebookClickFunction}></FacebookCircularButton>
                </LoginButtonContainer>
            </SubContainer>
            <RegisterSpan>Belum punya akun? <Ancor onClick= {registerClickFunction}> Register</Ancor></RegisterSpan>
        </Container>
    );
}

//...............styling....................//
const Container= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #b070f0;
    overflow: hidden;
    margin: 0;
`;
const SubContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 350px;
    width: 290px;
    border-radius: 20px;
    border-width: 1px;
    border-color: #400080;
`;
const Span= styled.span`
    height: 50px;
    width: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    color: #400080;
    margin-bottom: 35px;
    font-weight: bold;
`;
const TextField= styled.input.attrs({
    placeholder: 'Email',
    placeholderTextColor: 'grey',
    type: 'email'
})`
    height: 25px;
    width: 230px;
    border: none;
    font-size: 14px; 
    margin-bottom: 2px;
    &:focus {
        border: none;
        outline: none;
    }
`;
const PasswordTextField= styled.input.attrs({
    placeholder: 'Password',
    placeholderTextColor: 'grey', 
    type: 'password'
})`
    height: 25px;
    width: 230px;
    border: none;
    font-size: 14px;
    margin-bottom: 2px;
    &:focus {
        border: none;
        outline: none;
    }
`;
const UnderLine= styled.div`
    height: 1px;
    width: 230px;
    margin-bottom: 16px;
    background-color: #400080;
`;
const Button= styled.button`
    margin-top: 25px;
    border: none;
    height: 35px;
    width: 150px;
    background-color: #400080;
    border-style: none;
    border-color: white;
    border-radius: 10px;
    color: white;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        background-color: #3538a6
    }
`;
const LoginSpan= styled.span`
    height: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #333333;
    margin-top: 10px;
`;
const LoginButtonContainer= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 30px;
    width: 90px;
    margin-top: 10px;
`; 
const GoogleCircularButton= styled.div`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: grey;
    margin: 0;
    padding: 2px;
    background-image: url("https://cdn.kibrispdr.org/data/604/google-logo-vector-16.png");
    background-repeat: no-repeat;
    background-size: 105%;
    cursor: pointer;
`;
const FacebookCircularButton= styled.div`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    margin: 0;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("http://www.learningosn-soc.com/uploads/a/admin/05b80ee1d3.png");
    background-repeat: no-repeat;
    background-size: 103%;
    cursor: pointer;
`;
const RegisterSpan= styled.span`
    height: 20px;
    font-size: 15px;
    font-color: white;
    width: 300px;
    margin-top: 10px;
    display: flex; 
    justify-content: center;
    color: white;
`;
const Ancor= styled.div`
    text-decoration: none;
    color: #400080;
    margin-left: 5px;
    cursor: pointer;
`;

export default Login