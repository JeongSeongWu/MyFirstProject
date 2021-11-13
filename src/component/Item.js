import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import reefNote from '../img/reefnote.jpeg'
import CartIcon from './CartIcon'

const ItemContainer = styled.div`
    width: 370px;
    height: 460px;
    /* border: 1px solid #efefef; */
    margin: 20px;
`

const Img = styled.img`
    width: 370px;
    height: 390px;
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

const Div2 = styled.div`
    margin-top: 10px;
    /* padding-top: 10px; */
    margin-right: 10px;
`

const ItemName = styled.div`
    font-size: 20px;
    font-weight: 500;
`
const Price = styled.div`
    font-size: 18px;
`
function Item() {
    return (
        <ItemContainer>
            <Img src={reefNote} alt="reefNote"/>
        <Div>
            <ItemName>Reef Note</ItemName>
            <Div2><CartIcon /></Div2>
        </Div>
            <Price>3,000₩</Price>
        </ItemContainer>
    )
}

export default Item