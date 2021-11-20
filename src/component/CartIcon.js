import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import './component.css'
import { useState } from "react";

const SIZES = ["xs", "sm", "lg", "2x", "3x", "5x", "7x", "10x"];

const ToggleContainer = styled.div`
 position: relative;
    cursor: pointer;
    > .toggle-cart {
        position: absolute;
        top: -10px;
        left: -75px;
        transition: all .25s ease;
        &.toggle--checked {
            left: -35px;
            color: #00c6ff;
        }
    }
`;

function CartIcon() {
    const [isOn, setisOn] = useState(false);

    const toggleHandler = () => {
      setisOn(true)
    };
    
    return (
      <>
        <ToggleContainer onClick={toggleHandler}>
          <FontAwesomeIcon icon={faShoppingCart} size='2x' color='#e5e5e5' className={'toggle-cart ' + (isOn ? 'toggle--checked':'')}/>
        </ToggleContainer>
      </>
    );
    
}

export default CartIcon;