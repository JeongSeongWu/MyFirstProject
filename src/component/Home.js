import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const Header = styled.header`
    width: 100vw;
    height: 80px;
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    /* background: #e5e5e5; */
`

const Form = styled.form`
    width: 570px;
    display: flex;
    justify-content: space-around;
    /* border: 2px dashed black;     */
    /* background-color: #56CCF2; */
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    /* align-items: space-around; */
`
const Input = styled.input`
    height: 33px;
    /* padding: 0 10px; */
    border: 1px solid #ddd; 
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.075);
    font-size: 16px;   
    /* margin-right: 15px; */
`

const H1 = styled.h1`
    margin-left: 20px;
    color: #00c6ff;

`

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const Div2 = styled.div`
    font-size: .7rem;
    color: rgb(221, 65, 65);
    font-weight: bold;
    position: absolute;
    right: 610px;
`

const Div3 = styled.div`
    font-size: .7rem;
    color: rgb(221, 65, 65);
    font-weight: bold;
    position: absolute;
    right: 610px;
`

const Button = styled.button`
    width: 100px;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid #00c6ff;
    border-radius: 4px;
    color: white;
    /* margin: 10px; */
    background: #55a532 linear-gradient(#00d2ff, #3a7bd5);
    &:last-child {
        margin-right: 10px;
    }
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
    const [password, setPassword] = useState(false);
    const [ID, setId] = useState(false);
    //비밀번호 유효성 검사
    const checkPassword = (e) => {
    //  8 ~ 10자 영문, 숫자 조합
    let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
    // 형식에 맞는 경우 true 리턴
    if(regExp.test(e.target.value)) {
        setPassword(true)
        return true
    } else {
        setPassword(false)
        return false
    }
    }
    const checkId = (e) => {    
        let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
        if(regExp.test(e.target.value)) {
            
            setId(true)
            
            return true
        } else {
            setId(false)
            
            return false;
        }
    }
    

    return (
        <Header>
            <H1>PAPER AQUARIUM</H1>
            <Form>
            <Input placeholder='userId'/>
            <Input placeholder='password'/>
            <Button>Login</Button>
            <Link to="/signup"><Button>SignUp</Button></Link>
            </Form>
        </Header>
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