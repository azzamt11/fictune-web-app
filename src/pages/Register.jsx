import React, {useRef} from "react";
import styled from "styled-components";
import {register} from "../actions/AuthActions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


function Register() {
    //reference declaration
    const usernameRef= useRef();
    const emailRef= useRef();
    const passwordRef= useRef();
    const confirmpasswordRef= useRef();

    //react-redux declaration
    const loading= useSelector((state)=> state.loading);
    const navigate= useNavigate();
    const dispatch= useDispatch();

    //mismatch function
    const mismatchPasswordFunction= ()=> {
        alert("password dan konfirmasi passwordmu tidak sesuai, silahkan diisi kembali");
        document.getElementById("passwordInput").value= "";
        document.getElementById("passwordConfirmationInput").value= "";
    }

    //match password function
    const matchPasswordFunction= (input)=> {
        console.log(input);
        if (input.password.length<6) {
            alert("passwordmu kurang dari 6 karakter, silahkan diisi");
        } else {
            dispatch(register(input, navigate));
        }
    }

    //registerClickFunction
    const registerClickFunction= ()=>{
        var dataOnSubmit= {
            name: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmpassword: confirmpasswordRef.current.value
        };
        dataOnSubmit.password===dataOnSubmit.confirmpassword? matchPasswordFunction(dataOnSubmit) : mismatchPasswordFunction();
    };

    //google click function
    const googleClickFunction= ()=> {
        //to do something.
    }

    //facebok click function
    const facebookClickFunction= ()=> {
        //todo something.
    }
    
    //returning value and rendering
    return (
        <Container>
        <SubContainer>
            <Span>Register ke Fictune</Span>
            <UsernameTextField hiddenLabel id="usernameInput" defaultValue="" ref= {usernameRef}/>
            <UnderLine></UnderLine>
            <EmailTextField hiddenLabel id="emailInput" defaultValue="" ref= {emailRef}/>
            <UnderLine></UnderLine>
            <PasswordTextField hiddenLabel id="passwordInput" defaultValue="" ref= {passwordRef}/>
            <UnderLine></UnderLine>
            <PasswordTextField hiddenLabel id="passwordConfirmationInput" defaultValue="" ref= {confirmpasswordRef}/>
            <UnderLine></UnderLine>
            <Button onClick= {registerClickFunction}>{loading? "Loading..." : "Register"}</Button>
            <RegisterSpan>atau register dengan akun google atau facebook:</RegisterSpan>
            <RegisterButtonContainer>
                <GoogleCircularButton onClick= {googleClickFunction}></GoogleCircularButton>
                <FacebookCircularButton onClick= {facebookClickFunction}></FacebookCircularButton>
            </RegisterButtonContainer>
        </SubContainer>
    </Container>
  )
}

//....................Styling......................//
const Container= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #b070f0;
`;
const SubContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 420px;
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
const UsernameTextField= styled.input.attrs({
    placeholder: 'Username',
    placeholderTextColor: 'grey',
    type: 'text'
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
const EmailTextField= styled.input.attrs({
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
const RegisterSpan= styled.span`
    height: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #333333;
    margin-top: 10px;
`;
const RegisterButtonContainer= styled.div`
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

export default Register