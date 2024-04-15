import React from "react";
import styled from "styled-components";
import icon from "../../assests/Icons/header/Search.svg";
export default function SearchLogo() {
  return (
    <Wrapper>
      <img src={icon} alt="Search" />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid var(--color-CodGray);
  border-radius: 50%;
  width: 44px;
  padding: 5px;
  background-color: var(--color-white);
  img {
    margin-top: 20%;
  }
`;
