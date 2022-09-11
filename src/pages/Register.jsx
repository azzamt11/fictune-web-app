import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Register= ()=> {
    let navigate= useNavigate();

    //reference
    const usernameRef= useRef('');
    const emailRef= useRef('');
    const passwordRef= useRef('');

    //states
    const [isLoading, setIsLoading]= useState(false);
    
    //handle login click button
    const registerButtonFunction= async()=> {
        setIsLoading(true);
        try {
            const response = await axios.post(
            'http://ftunebackend.herokuapp.com/api/register',
             JSON.stringify({name: usernameRef.current.value, email: emailRef.current.value, password: passwordRef.current.value}),
            {
                headers: { "Content-Type": "application/json" },
            });
            setIsLoading(false);
            Cookies.set('name', response.data.user.name);
            Cookies.set('token', response.data.token);
            Cookies.set('imageString', response.data.user.user_attribute_1);
            if (window.confirm('Situs ini menggunakan Cookies untuk memudahkan pengguna, apakah anda tetap ingin melanjutkan?')) {
                navigate("/home", { state: {name: response.data.user.name, token: response.data.token, imageString:response.data.user.user_attribute_1 }});
            } else {
                Cookies.remove('name');
                Cookies.remove('token');
                document.getElementById('usernameInput').value= '';
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
    const googleButtonFunction= () => {
        alert('Mohon maaf, fitur ini masih dalam proses pengembangan.');
    }

    //handle circular button click
    const facebookButtonFunction= () => {
        alert('Mohon maaf, fitur ini masih dalam proses pengembangan.');
    }

    //useEffect hook
    useEffect(() => {
    }, [isLoading]);

    //returning elements
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
            <Button onClick= {registerButtonFunction}>{isLoading? "Loading..." : "Register"}</Button>
            <RegisterSpan>atau register dengan akun google atau facebook:</RegisterSpan>
            <RegisterButtonContainer>
                <GoogleCircularButton onClick= {googleButtonFunction}></GoogleCircularButton>
                <FacebookCircularButton onClick= {facebookButtonFunction}></FacebookCircularButton>
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
    height: 500px;
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
    color: #400080;
    margin-bottom: 35px;
    font-weight: bold;
`;
const UsernameTextField= styled.input.attrs({
    placeholder: 'Username',
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
const EmailTextField= styled.input.attrs({
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
    background-color: #400080;
`;
const Button= styled.button`
    margin-top: 30px;
    border: none;
    height: 40px;
    width: 170px;
    background-color: #400080;
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
const RegisterSpan= styled.span`
    height: 20px;
    width: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #333333;
    margin-top: 10px;
`;
const RegisterButtonContainer= styled.div`
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
    color: #400080;
    margin-left: 5px;
    cursor: pointer;
`;

export default Register