import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Cookies from 'js-cookie';

//.......................main function...................//
const Login= () => {
    //navigation function 
    let navigate= useNavigate();

    //reference
    const emailRef= useRef('');
    const passwordRef= useRef('');

    //states
    const [isLoading, setIsLoading]= useState(false);

    //handle login click button
    const handleLoginClick= async()=> {
        setIsLoading(true);
        try {
            const response = await axios.post(
              'http://ftunebackend.herokuapp.com/api/login',
              JSON.stringify({ email: emailRef.current.value, password: passwordRef.current.value}),
              {
                headers: { "Content-Type": "application/json" },
              }
            );
            setIsLoading(false);
            Cookies.set('name', response.data.user.name);
            Cookies.set('token', response.data.token);
            Cookies.set('imageString', response.data.user.user_attribute_1);
            if (window.confirm('Situs ini menggunakan Cookies untuk memudahkan pengguna, apakah anda tetap ingin melanjutkan?')) {
                navigate("/home", { state: {name: response.data.user.name, token: response.data.token, imageString:response.data.user.user_attribute_1 }});
              } else {
                Cookies.remove('name');
                Cookies.remove('token');
                document.getElementById('emailInput').value= '';
                document.getElementById('passwordInput').value= '';
              }

        } catch(e) {
            setIsLoading(false);
            if (e.code=="ERR_BAD_RESPONSE") {
                if (e.response.data.message=="invalid credentials") {
                    alert('Email atau Password yang anda masukkan tidak valid.');
                }
            } else {
                alert('Koneksi bermasalah, silahkan periksa sambungan internet anda.');
            }
        }
        setIsLoading(false);
    }

    //handle circular button click
    const cbHandleClick= () => {
        alert('name= ' + '' +', token= '+ '');
    }

    //handle register click
    const handleRegisterClick= ()=> {
        alert('clicked register');
    }

    //useEffect hook
    useEffect(() => {
    }, [isLoading]);
    
    //returnng elements
    return (
    <Container>
        <SubContainer>
            <Span>Login ke Fictune</Span>
            <TextField hiddenLabel id="emailInput" defaultValue="" ref= {emailRef}/>
            <UnderLine></UnderLine>
            <PasswordTextField hiddenLabel id="passwordInput" defaultValue="" ref= {passwordRef}/>
            <UnderLine></UnderLine>
            <Button onClick= {handleLoginClick}>{isLoading? "Loading..." : "Login"}</Button>
            <LoginSpan>atau login dengan akun google atau facebook:</LoginSpan>
            <LoginButtonContainer>
                <GoogleCircularButton onClick= {cbHandleClick}></GoogleCircularButton>
                <FacebookCircularButton onClick= {cbHandleClick}></FacebookCircularButton>
            </LoginButtonContainer>
        </SubContainer>
        <RegisterSpan>Belum punya akun? <Ancor onClick= {handleRegisterClick}> Register</Ancor></RegisterSpan>
    </Container>
    );
}

export default Login;


//...............styling....................//
const Container= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #252864;
`;
const SubContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 420px;
    width: 350px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px #dddddd;
`;
const Span= styled.span`
    height: 60px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #232896;
    margin-bottom: 35px;
    font-weight: bold;
`;
const TextField= styled.input.attrs({
    placeholder: 'Email',
    placeholderTextColor: 'grey',
    placeholderFontSize: '18px',
    type: 'email'
})`
    height: 30px;
    width: 250px;
    border: none;
    font-size: 18px; 
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
    height: 30px;
    width: 250px;
    border: none;
    font-size: 18px;
    margin-bottom: 2px;
    &:focus {
        border: none;
        outline: none;
    }
`;
const UnderLine= styled.div`
    height: 1px;
    width: 250px;
    margin-bottom: 21px;
    background-color: #232896;
`;
const Button= styled.button`
    margin-top: 30px;
    border: none;
    height: 40px;
    width: 170px;
    background-color: #252896;
    border-style: none;
    border-color: white;
    border-radius: 10px;
    color: white;
    font-size: 19px;
    cursor: pointer;
    &:hover {
        background-color: #3538a6
    }
`;
const LoginSpan= styled.span`
    height: 20px;
    width: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #333333;
    margin-top: 10px;
`;
const LoginButtonContainer= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 115px;
    margin-top: 10px;
`; 
const GoogleCircularButton= styled.div`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    background-color: grey;
    margin: 0;
    padding: 2px;
    background-image: url("https://cdn.kibrispdr.org/data/604/google-logo-vector-16.png");
    background-repeat: no-repeat;
    background-size: 105%;
    cursor: pointer;
`;
const FacebookCircularButton= styled.div`
    height: 40px;
    width: 40px;
    border-radius: 20px;
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
const Ancor= styled.div`
    text-decoration: none;
    color: #a0a0ff;
    margin-left: 5px;
    cursor: pointer;
`;
const RegisterSpan= styled.span`
    height: 25px;
    font-size: 19px;
    font-color: white;
    width: 300px;
    margin-top: 10px;
    display: flex; 
    justify-content: center;
    color: white;
`;