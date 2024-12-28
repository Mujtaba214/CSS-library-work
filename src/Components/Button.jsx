import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button> Button
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
   appearance: button;
   background-color: #1899D6;
   border: solid transparent;
   border-radius: 16px;
   border-width: 0 0 4px;
   box-sizing: border-box;
   color: #FFFFFF;
   cursor: pointer;
   display: inline-block;
   font-size: 15px;
   font-weight: 700;
   letter-spacing: .8px;
   line-height: 20px;
   margin: 0;
   outline: none;
   overflow: visible;
   padding: 13px 19px;
   text-align: center;
   text-transform: uppercase;
   touch-action: manipulation;
   transform: translateZ(0);
   transition: filter .2s;
   user-select: none;
   -webkit-user-select: none;
   vertical-align: middle;
   white-space: nowrap;
  }

  button:after {
   background-clip: padding-box;
   background-color: #1CB0F6;
   border: solid transparent;
   border-radius: 16px;
   border-width: 0 0 4px;
   bottom: -4px;
   content: "";
   left: 0;
   position: absolute;
   right: 0;
   top: 0;
   z-index: -1;
  }

  button:main, button:focus {
   user-select: auto;
  }

  button:hover:not(:disabled) {
   filter: brightness(1.1);
  }

  button:disabled {
   cursor: auto;
  }

  button:active:after {
   border-width: 0 0 0px;
  }

  button:active {
   padding-bottom: 10px;
  }`;

export default Button;
