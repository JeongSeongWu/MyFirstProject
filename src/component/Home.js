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

//   function isMoreThan4Length(value) {
//     return value.length >= 4
//   }
  
//   // [유효성 검증 함수]: 영어 또는 숫자만 가능
//   function onlyNumberAndEnglish(str) {
//     return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
//   }
  
//   // [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
//   function strongPassword(str) {
//     return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
//   }



function Home() {
    const [userInfo, setUserInfo] = useState({
        userId: '',
        password: ''
    });
    const [isLogin, setIsLogin] = useState(false);
    // console.log('로그인여부',isLogin)
    const handleInputValue = (key) => (e) => {
        setUserInfo({ ...userInfo, [key]: e.target.value });    
      };

      const isAuthenticated = () => {
        // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
        axios.get('https://localhost:4050/auth')
        .then((res) => {
          setUserInfo(res)
        })
        setIsLogin(true)
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
        handleResponseSuccess(res)
      }).catch(err => console.log(err))
      } else {
        alert('please, check your ID or Password')
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
                {isLogin?<Div>Wellcom, {userInfo.userId}!</Div>:<Input placeholder='userId'onChange={handleInputValue('userId')}/>}
                {isLogin?"":<Input placeholder='Password' className='pwInput' type='password' onChange={handleInputValue('password')}/>}
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


{/* <HomeBack>
            <HomeBack2>
            <HomeContainer>
                <H1>PAPER AQUARIUM</H1>
                <Form>
                    <Div>
                        <Input placeholder='Username' className='idInput' onChange={checkId}/>
                        {ID?<Div3>영문과 숫자만 가능합니다.</Div3>:<Div3></Div3>}
                    </Div>
                    <Div>
                        <Input placeholder='Password' className='pwInput' type='password' onChange={checkPassword}/>
                        {password?<Div2>유효하지 않습니다.</Div2>:<Div2></Div2>}
                    </Div>
                    <Div>
                        <Button>LogIn</Button>
                    </Div>
                    <Div>
                    <Link to="/signup"><Button>SignUp</Button></Link>
                    </Div>
                </Form>
            </HomeContainer>
            </HomeBack2>
        </HomeBack> */}

export default Home