import React from "react";
import styled from "styled-components";

function Seller() {
  return (
    <Container>
      <Content>
        <Header>
          <h3>More Sellers</h3>
        </Header>
        <Details>
          <Detail>
            <SellersDetails>
              <h3>$67.00</h3>
              <p>Seller Two</p>
              <p>Free Shipping (Standard)</p>
            </SellersDetails>
            <Images>
              <img src="images/shopcart.png" alt="" />
            </Images>
          </Detail>
          <Detail>
            <SellersDetails>
              <h3>$65.50</h3>
              <p>Seller Three</p>
              <p>Shipping $5.99 (Express)</p>
            </SellersDetails>
            <Images>
              <img src="images/shopcart.png" alt="" />
            </Images>
          </Detail>
          <Footer>
            <h3>Other offers starting at $91.00</h3>
          </Footer>
        </Details>
      </Content>
      <Shipping>
        <Heading>
          <img src="images/path 108.png" alt="" />
          <p>Shipping Options:</p>
        </Heading>
        <Subsection>
          <p>Before Oct 14 - $5.99 <span>Select Express</span></p>
          <p>After Oct 14 - FREE  (Standard shipping)</p>
        </Subsection>
      </Shipping>
    </Container>
  );
}

export default Seller;
const Container = styled.div`
  grid-area: rightside;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bbbbbb;
  width: 250px;
  height: 300px;
`;
const Header = styled.div`
  border-bottom: 1px solid #bbbbbb;
  h3 {
    text-align: center;
    color: #1c1c1c;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

const SellersDetails = styled.div`
  h3 {
    color: #464646;
    margin-bottom: 5px;
  }
  p {
    font-weight: 600;
    font-size: 14px;
    text-decoration-line: underline;
    color: #0a6ebc;
    margin: 0;
  }
  p:nth-of-type(2n) {
    text-decoration: none;
    color: #3b3b3b;
  }
`;
const Images = styled.div`
  margin-top: 15px;
  background: #47afff;
  width: 45px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  border-top: 1px solid #bbbbbb;
  h3 {
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    text-decoration-line: underline;
    color: #0a6ebc;
  }
`;
const Shipping = styled.div`
 display: flex;
  flex-direction: column;
`;
const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
  }
  img {
    width: 35px;
    height: 20px;
    margin-right: 20px;
  }
`;
const Subsection = styled.div`
p{
  margin:3px;
  span{
    text-decoration: underline;
    color: #0A6EBC;
  }
}
`