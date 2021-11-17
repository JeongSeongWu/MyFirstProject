import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router'

import { Link } from 'react-router-dom'
import axios from 'axios'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    /* background-color: lightgray; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginContainer = styled.div`
    width: 400px;
    height: 510px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #55a532 linear-gradient(#00d2ff, #3a7bd5);
`

const Form = styled.form`
    width: 360px;
    height: 500px;
    /* border: 2px dashed black;     */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const H1 = styled.h1`
    color: #efefef;
`
const Div = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    /* border: 1px solid tomato;     */
`
const Input = styled.input`
    width: 340px;
    height: 40px;   
    margin: 10px;
`
const Div2 = styled.div`
    font-size: .7rem;
    color: rgb(221, 65, 65);
    font-weight: bold;
    position: absolute;
    right: 20px;
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
    cursor: pointer;
    background: #55a532 linear-gradient(#00d2ff, #3a7bd5);
    position: relative;
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

function SignUp() {
    // const [password, setPassword] = useState(true);
    // const [ID, setId] = useState(false);
    const navigate = useNavigate();
    const [userinfo, setuserinfo] = useState({
        userId: '',
        password: '',
        email: '',
        userName: ''
    })

    // const onChange = (e) => {
    //     const { value, password } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    //     setuserinfo({
    //       ...userinfo, // 기존의 input 객체를 복사한 뒤
    //       [password]: value // name 키를 가진 값을 value 로 설정
    //     });
    //   };

    const handleInputValue = (key) => (e) => {
        setuserinfo({ ...userinfo, [key]: e.target.value });
        console.log('유저정보',userinfo)
      };

    //   const handleChange = (e) => {
    //     setuserinfo({
    //       [e.target.name]: e.target.value, // <- 변경 후
    //     });
    //   };
    
    const handleSignUp = () => {
        if(userinfo.userId && userinfo.password && userinfo.email && userinfo.userName) {
            axios.post('https://localhost:4050/signup', {
                userId: userinfo.userId,
                password: userinfo.password,
                email: userinfo.email,
                userName: userinfo.userName
            })
            .then(res => {
                if(res.data.message === 'ok') {
                    navigate('/');  
                }
                
            })
            .catch(err => console.log(err))
        }
    }


    //비밀번호 유효성 검사
    // const checkPassword = (e) => {
    // //  8 ~ 10자 영문, 숫자 조합
    // let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
    // // 형식에 맞는 경우 true 리턴
    // if(regExp.test(e.target.value)) {
    //     setPassword(true)
        
    // } else {
    //     setPassword(false)
    // }
    // }
    // const checkId = (e) => {    
    //     let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
    //     if(regExp.test(e.target.value)) {
            
    //         setId(true)
            
    //         return true
    //     } else {
    //         setId(false)
            
    //         return false;
    //     }
    // }
    

    return (
    <Container>
        <LoginContainer>
            <Form>
                <H1>SignUp</H1>
                <Div>
                    <Input name='userId' placeholder='UserId' className='idInput' onChange={handleInputValue('userId')}/>
                </Div>
                <Div>
                    <Input placeholder='UserName' className='idInput' onChange={handleInputValue('userName')}/>
                </Div>
                <Div>
                    <Input name='password' placeholder='Password' className='password' type='password' onChange={handleInputValue('password')}/>
                    {/* {password?<Div2></Div2>:<Div2>Not valid</Div2>} */}
                </Div>
                <Div>
                    <Input placeholder='Password-check' className='pwInput' type='password'/>
                </Div>
                <Div>
                    <Input name='email' placeholder='e-mail' className='pwInput' type='email' onChange={handleInputValue('email')}/>
                </Div>
                <Div>
                    <Button onClick={handleSignUp}>SignUp</Button>
                </Div>
            </Form>
        </LoginContainer>
    </Container>
    )

}
{/* <LoginBack>
            <LoginBack2>
            <LoginContainer>
                <H1>SignUp</H1>
                <Form>
                    <Div>
                        <Input placeholder='UserId' className='idInput' onChange={checkId}/>
                    </Div>
                    <Div>
                        <Input placeholder='Password' className='password' type='password' onChange={checkPassword}/>
                        {password?<Div2></Div2>:<Div2>Not valid</Div2>}
                    </Div>
                    <Div>
                        <Input placeholder='Password-check' className='pwInpu' type='password'/>
                    </Div>
                    <Div>
                        <Input placeholder='e-mail' className='pwInpu' type='email'/>
                    </Div>
                    <Div>
                        <Button>SignUp</Button>
                    </Div>
                </Form>
            </LoginContainer>
            </LoginBack2>
        </LoginBack> */}
export default SignUp