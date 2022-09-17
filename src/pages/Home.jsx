import React, {useEffect} from 'react';
import {Outlet, Link, useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {logout} from "../actions/AuthActions";
import styled from 'styled-components';

const Home= ({user})=> {
    //dummy
    const coin= "2000";

    //navigation and dispatch
    const navigate= useNavigate();
    const dispatch= useDispatch();

    //search function
    const onSearch= ()=> {
        //something to do on searching.
    }

    //logout function
    const logoutClickFunction= ()=> {
        dispatch(logout(user, navigate));
    }

    //alert function
    const alertClickFunction= ()=> {
        document.getElementById('glass').style.cssText= 'display: none';
    }

    //useEffect
    useEffect(() => {
        window.addEventListener('scroll', function() {
            document.getElementById('header').style.cssText= window.scrollY>39? "height: 50px": "height: 73px";
            document.getElementById('side-body-subcontainer').style.cssText= window.scrollY>39? "top: 45px": "top: 65px";
        }, false); 
    }, [navigate]);

    return (
        <Container>
            <Glass id= 'glass'>
                <DevelopmentAlert id= 'alert'>
                    <AlertMainBody>
                        <AlertSymbol src= 'https://thumbs.dreamstime.com/b/warning-sign-yellow-exclamation-mark-icon-danger-sign-attention-sign-caution-alert-symbol-orange-isolated-white-background-144828378.jpg'/>
                        <AlertSpan>Mohon maaf, Aplikasi ini sedang dalam proses pengembangan.</AlertSpan>
                    </AlertMainBody>
                    <AlertButton onClick= {alertClickFunction}>Biarkan Saya Mengamati</AlertButton>
                </DevelopmentAlert>
            </Glass>
            <Header id= 'header'>
                <SubHeader>
                    <SubHeaderComponent id= 'main-subheader'>
                        <Link className= 'main-react-link' to= '/home'><Logo>Fictune</Logo></Link>
                        <Search handleSubmit= {onSearch}>
                            <SearchField/>
                            <SearchButton>Go</SearchButton>
                        </Search>
                    </SubHeaderComponent>
                    <SubHeaderComponent id= 'logout-subheader'>
                        <LogoutText onClick= {logoutClickFunction}>Logout</LogoutText>
                    </SubHeaderComponent>
                </SubHeader>
            </Header>
            <SideBodyContainer>
                <SideBodySubContainer id= 'side-body-subcontainer'>
                    <SideBodyHeader>
                        <TopMenuText>Beli Koin</TopMenuText>
                        <TopMenuText>Daftar Premium</TopMenuText>
                    </SideBodyHeader>
                    <UserProfileContainer>
                        <UserImage></UserImage>
                        <UserData>
                            <UserName>{user? user.user.name : "no-user"}</UserName>
                            <CoinImage src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZ1wn6hO_Ea4CIGhSrQeBeueUmgFr4Zs3qg&usqp=CAU'/>
                            <UserCoin>{coin}</UserCoin>
                        </UserData>
                    </UserProfileContainer>
                    <DividerLine></DividerLine>
                    <Link className= 'react-link' to= '/home/my-favorite-novels'><MenuText>Novel Favoritku</MenuText></Link>
                    <DividerLine></DividerLine>
                    <Link className= 'react-link' to= '/home/my-novels'><MenuText>Novel Karanganku</MenuText></Link>
                    <DividerLine></DividerLine>
                    <Link className= 'react-link' to= '/home/help'><MenuText>Bantuan</MenuText></Link>
                    <DividerLine></DividerLine>
                    <Link className= 'react-link' to= '/home/setting'><MenuText>Pengaturan</MenuText></Link>
                    <DividerLine></DividerLine>
                    <Link className= 'react-link' to= '/home/about-developer'><MenuText>Tentang Developer</MenuText></Link>
                </SideBodySubContainer>
            </SideBodyContainer>
            <MainBodyContainer>
                <Outlet/>
            </MainBodyContainer>
        </Container>
    )
}

const Container= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: 2300px;
    overflow-x: hidden;
    overflow-y: hidden;
`;
var Header= styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    height: 73px;
    width: 100vw;
    padding: 0;
    background-color:#400080;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px #888888;
    z-index: 10;
    transition: all 0.5s ease 0s;  
`;
const SubHeader= styled.div`
    position: relative;
    margin: 0;
    height: 100%;
    width: max(70%, 900px);
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const SubHeaderComponent= styled.div`
    width: 50%;
    position: relative;
    margin: 0;
    height: 100%;
    padding: 0;
    align-items: center;
`;
const Logo= styled.span`
    font-weight: bold;
    font-size: 25px;
    color: white;
`;
const Search= styled.div`
    height: 100%;
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const SearchField= styled.input.attrs({
    placeholder: "Cari",
    placeholderTextColor: "grey",
    type: "text"
})`
    color: black;
    font-size: 14px;
    beckground-color: white;
    border: none;
    height: 34px;
    width: 210px;
    padding-left: 19px;
    border-top-left-radius: 19px;
    border-bottom-left-radius: 19px;
    &:focus {
        border: none;
        outline: none;
    }
`;
const SearchButton= styled.button`
    height: 36px;
    width: 100px;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    border-top-right-radius: 19px;
    border-bottom-right-radius: 19px;
`;
const SideBodyContainer= styled.div`
    position: fixed;
    height: 100vh;
    width: 350px;
    background-color: white;
    display: flex;
    z-index: 5;
    box-shadow: 2px 0px 5px #888888;
`;
const SideBodySubContainer= styled.div`
    position: relative;
    height: 100vh- 90px;
    width: 100%;
    top: 65px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 15px;
    padding-top: 10px;
    transition: all 0.5s ease 0s;
`;
const MainBodyContainer= styled.div`
    height: 2500px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
`;
const LogoutText= styled.button`
    font-size: 15px;
    color: #ffff00;
    font-weight: bold;
    border: none;
    border-style: none;
    height: 50px;
    width: 100px;
    background-color: #400080;
    transition: all 0.5s ease 0s;
    cursor: pointer;
    &:hover {
        color: white;
    }
`;
const SideBodyHeader= styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;  
const TopMenuText= styled.span`
    height: 30px;
    margin-left: 15px;
    color: #888888;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        color: #400080;
        text-decoration: underline;
    }
`;
const UserProfileContainer= styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const UserImage= styled.button`
    height: 90px;
    width: 90px;
    border-radius: 45px;
    border-color: #cccccc;
    border-width: 2px;
    background-color: #400080;
    matgin-bottom: 15px;
`;
const UserData= styled.div`
    height: 40px;
    width : 100%;
    display: flex;
    flex-direciton: row;
    align-items: center;
    justify-content: center;
`;
const UserName= styled.span`
    font-size: 16px;
    color: #400080;
    margin-right: 10px;
`;
const UserCoin= styled.span`
    fonst-size: 16px;
    color: #400080;
    margin-left: 5px;
`;
const CoinImage= styled.img`
    padding-top: 2px;
    height: 30px;
    width: 25px;
    background-color: white;
`;
const DividerLine= styled.div`
    height: 1px;
    width: 90%;
    margin: 5px 5px;
    background-color: #cccccc;
`;
const MenuText= styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #909090;
    cursor: pointer;
    transition: all 0.5s ease 0s;
    &:hover {
        color: #400080;
    }
`;
const Glass= styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 11;
`;
const DevelopmentAlert= styled.div`
    background-color: rgba(33, 33, 33, 0.4);
    height: 400px;
    width: 600px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const AlertMainBody= styled.div`
    height: 200px;
    width: 80%;
    display: flex;
    flex-direction: row;
    justofy-content: center;
    align-items: center;
`;
const AlertSpan= styled.span`
    height: 70px;
    display: flex;
    alin-items: center;
    color: white;
    font-size: 16px;
    font-weight: bold;
    overflow-wrap: normal;
    text-align: left;  
    margin-left: 15px;
`;
const AlertSymbol= styled.img`
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const AlertButton= styled.button`
    height: 50px;
    width: 190px;
    color: #400080;
    font-weight: bold;
    background-color: #ffff00;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    transition: all 0.5s ease 0s;
    cursor: pointer;
    &:hover {
        background-color: white;
    }
`;


export default Home