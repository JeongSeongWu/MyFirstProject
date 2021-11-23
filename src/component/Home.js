import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Item from './Item'
import Item2 from './Item2'
import Item3 from './Item3'
import Item4 from './Item4'
import axios from 'axios'
import { useNavigate } from 'react-router'
import backImage from '../img/back.jpeg'
import logo from '../img/logo.png'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'

const HomeBackground = styled.div`
    /* width: 100vw; */
    /* height: 100vh; */
    /* background: gray; */
`

const Header = styled.header`
    width: 98vw;
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

const Img2 = styled.img`
    width: 34px;
    margin-right: 10px;   
    margin-left: 10px;
    /* border: 1px dashed blue; */
`
const H1 = styled.h1`
    display: flex;
    align-items: center;
    margin-left: 20px;
    color: #3a7bd5;
    /* border: 1px dotted darkgreen; */
`

const Button = styled.button`
    width: 100px;
    height: 34px;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid #3a7bd5;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    /* background: #55a532 linear-gradient(#00d2ff, #3a7bd5); */
    background: #3a7bd5;
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


// 카테고리고 쓰다가 중간에 사진 넣는 용도로 바꿈
const Category = styled.div`
    width: 98vw;
    height: 270px;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: space-evenly;
    /* background: #55a532 linear-gradient(#00d2ff, #3a7bd5); */
    align-items: center;
    margin-bottom: 30px;
`
const Img = styled.img`
    width: 100%;
    height: 270px;
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
    width: 98vw;
    height: 500px;
    /* border: 3px dashed red; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const BodyContainer = styled.div`
    width: 80%;
    height: 100%;
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
    width: 98vw;
    height: 30%;
    border-top: 1px solid #efefef;
`

function Home() {
    const [userInfo, setUserInfo] = useState({
        userId: '',
        password: ''
    });
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
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
      })
      .then(res => {
        // navigate('/mypage')
      })
      .catch(err => alert('please, check your ID or Password'))
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
        <HomeBackground>
        <Header>
            <H1><Img2 src={logo} alt='logo'/>PAPER AQUARIUM</H1>
            {/* <Link to="/mypage"><Button>Mypage</Button></Link> */}
            <Form  onSubmit={(e) => e.preventDefault()}>
                {isLogin?<Div>Wellcom, {userInfo.userName}!</Div>:<Input placeholder='userId'onChange={handleInputValue('userId')} autoComplete='on'/>}
                {isLogin?"":<Input placeholder='Password' className='pwInput' type='password' onChange={handleInputValue('password')} autoComplete='on'/>}
                {isLogin?<Button type='submit' onClick={handleLogout}>Logout</Button>:<Button type='submit' onClick={handleLogin}>Login</Button>}
                {isLogin?"":<Link to="/signup"><Button>SignUp</Button></Link>}
            </Form>
        </Header>
        <Category>
            <Img src={backImage} alt='image'/>
        </Category>
        <Body>
            <BodyContainer>
                <LeftArrow/>
                <Item />
                <Item2 />
                <Item3 />
                <Item4 />
                <RightArrow/>
            </BodyContainer>
        </Body>
        <Footer/>
        
        </HomeBackground>
    )
}
{/* <Flag/><Menu>All</Menu>
<Flag/><Menu>Book</Menu>
<Flag/><Menu>Note</Menu>
<Flag/><Menu>ETC</Menu><Flag/>            */}

    

export default Home