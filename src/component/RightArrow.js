import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import './component.css'


const SIZES = ["xs", "sm", "lg", "2x", "3x", "5x", "7x", "10x"];

const ToggleContainer = styled.div`
    height: 340px;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 15px;
    /* margin-left: 5px; */
    &:hover {
        color: #00c6ff;
        
    }
`;

function RightArrow() {
    
    
    return (
      <>
        <ToggleContainer>
          <FontAwesomeIcon icon={faChevronRight} size='2x' color='#e5e5e5'/>
        </ToggleContainer>
      </>
    );
    
}

export default RightArrow;