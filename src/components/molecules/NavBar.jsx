import React from "react";
import styled from "styled-components";
import SearchLogo from "../atoms/SearchLogo";
export default function NavBar() {
  return (
    <Wrapper>
      <SearchLogo />
      <ul>
        <li>ورود</li>
        <li>صاحب انبارشو</li>
        <li>پشتیبانی</li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 328px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    li {
      padding-bottom: 12px;
      padding-top: 12px;
      padding-right: 11px;
      cursor: pointer;
    }
  }
`;
