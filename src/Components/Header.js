import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Content>
        <FirstCompo>
          <Logo src="images/logo.png" />
          <TextFields>
            <input type="text" />
            <Search>
              <img src="images/search.png" alt="" />
            </Search>
          </TextFields>
        </FirstCompo>
        <User src="images/user.png" />
        <Cart src="images/cart.png" />
      </Content>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  line-height: 1;
  background-color: #ffffff;
  padding: 10px;
  height: 84px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.img`
  width: 180px;
  height: 40px;
`;
const TextFields = styled.div`
  display: flex;
  flex-direction: row;
  input {
    width: 600px;
    height: 30px;
    border: 1px solid #aaaaaa;
    border-radius: 4px;
    outline: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Search = styled.div`
  background-color: #000;
  width: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  img {
    width: 23px;
    height: 23px;
  }
`;

const User = styled.img`
  width: 32px;
  height: 32px;
`;

const Cart = styled.img`
  width: 32px;
  height: 32px;
`;

const FirstCompo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
`;
