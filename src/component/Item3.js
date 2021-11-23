import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import langNote1 from '../img/langNote1.png'
import CartIcon from './CartIcon'

const ItemContainer = styled.div`
    width: 240px;
    height: 340px;
    /* border: 1px solid #efefef; */
    margin: 15px;
`

const Img = styled.img`
    width: 240px;
    height: 340px;
    border: 1px solid #000;
    /* box-shadow:2px 2px 3px 0px; */
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
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
            <Img src={langNote1} alt="reefNote"/>
        <Div>
            <ItemName>Language Note</ItemName>
            <Div2><CartIcon /></Div2>
        </Div>
            <Price>4,500₩</Price>
        </ItemContainer>
    )
}

export default Item