import Logo from "../atoms/Logo";
import NavBar from "../molecules/NavBar";
import styled from "styled-components";
export default function Header() {
  return (
    <Wrapper>
      <NavBar />
      <Logo />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
