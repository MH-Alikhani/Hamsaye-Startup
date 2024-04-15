import React from "react";
import logo from "../../assests/Icons/header/logo.png";
import styled from "styled-components";
export default function Logo() {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 187px;
  height: 50px;
  padding-left: 24px;
  cursor: pointer;
`;
