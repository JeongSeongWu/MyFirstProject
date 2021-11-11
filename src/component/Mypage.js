import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

const H1 = styled.h1`
    width: 300px;
    color: #2F80ED;
`

const Header = styled.div`
    width: 100vw;
    height: 300px;
    background: #2F80ED;
`

function Mypage () {
  /* TODO : props로 받은 유저정보를 화면에 표시하세요. */
  // 유저 이름, 이메일, 전화번호, 로그아웃 버튼 보여야함
  return (
    <Container>
        <H1>PAPER AQUARIUM</H1>
        <Header>My Page</Header>
    </Container>
  );
}

export default Mypage;
