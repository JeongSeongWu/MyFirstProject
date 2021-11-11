import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const LoginBack = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #2F80ED;
`

const LoginBack2 = styled.div`
    width: 97vw;
    height: 95vh;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: white;
`

const LoginContainer = styled.div`
    width: 100vw;
    height: 450px;
    /* border: 2px dashed red;     */
    /* background-color: #56CCF2; */
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    /* color: #2F80ED; */
`

const Form = styled.form`
    width: 100vw;
    height: 350px;
    /* border: 2px dashed black;     */
    /* background-color: #56CCF2; */
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    /* align-items: space-around; */
`
const Input = styled.input`
    width: 340px;
    height: 40px;   
    margin: 10px;
`

const H1 = styled.h1`
    /* margin-left: 10px; */
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
    width: 350px;
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid #00c6ff;
    border-radius: 4px;
    color: white;
    margin: 10px;
    background: #55a532 linear-gradient(#00d2ff, #3a7bd5);
    /* &:active { */
        /* content: ""; */
        /* position: absolute; */
        /* top: 0; */
        /* left: 0; */
        /* width: 100% ; */
        /* height: 100% ; */
        /* background: rgba(0, 0, 0, 0.07); */
        /* background: #021B79;
        color: white; */
    /* }; */
    /* &:hover::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100% ;
        height: 100% ;
        background: rgba(0, 0, 0, 0.07);
    } */
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



function SignUp() {
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
        <LoginBack>
            <LoginBack2>
            <LoginContainer>
                <H1>SignUp</H1>
                <Form>
                    <Div>
                        <Input placeholder='UserId' className='idInput' onChange={checkId}/>
                        {ID?<Div3>영문과 숫자만 가능합니다.</Div3>:<Div3></Div3>}
                    </Div>
                    <Div>
                        <Input placeholder='Password' className='pwInpu' type='password' onChange={checkPassword}/>
                        {password?<Div2>유효하지 않습니다.</Div2>:<Div2></Div2>}
                    </Div>
                    <Div>
                        <Input placeholder='Password-check' className='pwInpu' type='password'/>
                        {password?<Div2>유효하지 않습니다.</Div2>:<Div2></Div2>}
                    </Div>

                    <Div>
                        <Input placeholder='e-mail' className='pwInpu' type='email'/>
                    </Div>

                    <Div>
                        <Link to="/signup"><Button>SignUp</Button></Link>
                    </Div>
                </Form>
            </LoginContainer>
            </LoginBack2>
        </LoginBack>
    )

}

export default SignUp