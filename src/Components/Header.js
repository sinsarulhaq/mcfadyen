import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <Content>
        <FirstCompo>
          <Hamburg
            onClick={() => setBurgerStatus(true)}
            src="images/hamburg.png"
          />
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
      <BurgerNav show={burgerStatus}>
        <CloseWraper>
          <CustomeClose onClick={() => setBurgerStatus(false)}>
            {" "}
            X{" "}
          </CustomeClose>
        </CloseWraper>
        <li>Home</li>
        <li>Category</li>
        <li>Subcategory</li>
        <li>Product</li>
      </BurgerNav>
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
const Hamburg = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
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


//humberger opening
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 90%;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;

const CustomeClose = styled.div`
  cursor: pointer;
`;

const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
