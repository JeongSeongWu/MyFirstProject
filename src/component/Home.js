import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Item from './Item'
import axios from 'axios'

const Header = styled.header`
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

const Form = styled.form`
    width: 570px;
    display: flex;
    position: relative;
    justify-content: space-around;
`
const Input = styled.input`
    height: 33px;
    border: 1px solid #ddd; 
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.075);
    font-size: 16px;   
    
`

const Div = styled.div`
    height: 33px;
    /* border: 1px solid #ddd;  */
    /* border-radius: 5px; */
    box-sizing: border-box;
    outline: none;
    /* box-shadow: inset 0 1px 2px rgba(0,0,0,0.075); */
    font-size: 16px;   
`

const H1 = styled.h1`
    margin-left: 20px;
    color: #00c6ff;
`

const Button = styled.button`
    width: 100px;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid #00c6ff;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    background: #55a532 linear-gradient(#00d2ff, #3a7bd5);
    position: relative;
    &:last-child {
        margin-right: 10px;
    }
    &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.07);
    }
`



const Category = styled.div`
    width: 100%;
    height: 80px;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: space-evenly;
    /* background: #55a532 linear-gradient(#00d2ff, #3a7bd5); */
    align-items: center;
    margin-bottom: 30px;
`
const Menu = styled.div`
    /* color: #00c6ff; */
    font-size: 16px;
    /* font-weight: 550; */
`

const Flag = styled.div`
    
      width: 24px;
      height: 10px;
      box-sizing: content-box;
      padding-top: 15px;
      position: relative;
      background: #00c6ff;
      color: white;
      font-size: 11px;
      letter-spacing: 0.2em;
      text-align: center;
      text-transform: uppercase;
    
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-bottom: 9px solid white;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
    }
`

const Body = styled.div`
    width: 1438px;
    height: 600px;
    /* border: 1px dashed dodgerblue; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const BodyContainer = styled.div`
    width: 1430px;
    height: 590px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* border: 1px dashed blue; */
`

const Flag2 = styled.div`
    
      width: 24px;
      height: 10px;
      box-sizing: content-box;
      padding-top: 15px;
      position: relative;
      background: #00c6ff;
      color: white;
      font-size: 11px;
      letter-spacing: 0.2em;
      text-align: center;
      text-transform: uppercase;
    
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 0;
      
      border-bottom: 9px solid white;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
    }
`

const Footer = styled.footer`
    width: 100vw;
    height:200px;
    border-top: 1px solid #efefef;
`

function Home() {
    const [userInfo, setUserInfo] = useState({
        userId: '',
        password: ''
    });
    const [isLogin, setIsLogin] = useState(false);
    
    const handleInputValue = (key) => (e) => {
        setUserInfo({ ...userInfo, [key]: e.target.value });    
      };

    const isAuthenticated = () => {
        axios.get('https://localhost:4050/auth')
        .then((res) => {
          setUserInfo(res.data.data.userInfo)
          setIsLogin(true)
        })
        .catch(err => console.log(err))
      };

    const handleResponseSuccess = () => {
        isAuthenticated();
      };

    const handleLogin = () => {    
        if(userInfo.userId && userInfo.password) {
        axios.post('https://localhost:4050/signin', {
        userId: userInfo.userId,
        password: userInfo.password
      }).then(res => {
        //   console.log('응답이 뭔지 보자!',res)
        handleResponseSuccess(res)
      }).catch(err => alert('please, check your ID or Password'))
      } 
    }





    
    const handleLogout = () => {
        axios.post('https://localhost:4050/signout')
        .then(res => {
            setUserInfo({
                userId: '',
                password: ''
            });
            setIsLogin(false);
        })
    }


  // useEffect(() => {
  //   isAuthenticated();
  // }, []);
    
    return (
        <>
        <Header>
            <H1>PAPER AQUARIUM</H1>
            <Form  onSubmit={(e) => e.preventDefault()}>
                {isLogin?<Div>Wellcom, {userInfo.userName}!</Div>:<Input placeholder='userId'onChange={handleInputValue} value={userInfo.userId}/>}
                {isLogin?"":<Input placeholder='Password' className='pwInput' type='password' onChange={handleInputValue} value={userInfo.password}/>}
                {isLogin?<Button type='submit' onClick={handleLogout}>Logout</Button>:<Button type='submit' onClick={handleLogin}>Login</Button>}
                {isLogin?"":<Link to="/signup"><Button>SignUp</Button></Link>}
            </Form>
        </Header>
        <Category>
            <Flag/><Menu>All</Menu>
            <Flag/><Menu>Book</Menu>
            <Flag/><Menu>Note</Menu>
            <Flag/><Menu>ETC</Menu><Flag/>           
        </Category>
        <Body>
            <BodyContainer>
                <Item />
                <Item />
                <Item />
            </BodyContainer>

        </Body>
        <Footer>

        </Footer>
        </>
    )
}


export default Home