import React from "react";
import styled from "styled-components";

function Details() {
  const fullStart = "images/path 153.png";
  const Start = "images/vector.png";
  const yellowStart = "images/star.png";
  return (
    <Container>
      <Heading>
        <h3>Waterfall Knitted Cardigan</h3>
        <p>Product Id 2CDE283001R0100</p>
      </Heading>
      <Stars>
        <Image src={fullStart} />
        <Image src={fullStart} />
        <Image src={fullStart} />
        <Image src={fullStart} />
        <Image src={Start} />
      </Stars>
      <Price>
        <h3>$64.99</h3>
        <p>Free Shipping</p>
      </Price>
      <SelectionBox>
        <span>Select Size</span>
        <Boxes>
          <div>S</div>
          <div>L</div>
          <div>M</div>
        </Boxes>
        <span>Select Color</span>
        <Circles>
          <div />
          <div />
          <div />
          <div />
          <div />
        </Circles>
      </SelectionBox>
      <BuyOption>
        <Quality>
          <p>Quantity</p>
          <div>- 1 +</div>
          <button>Add to Cart</button>
        </Quality>
        <Zipcode>
          <p>Zipcode:</p>
          <div>90125</div>
          <p>Check Availability</p>
          <button>BUY Now</button>
        </Zipcode>
      </BuyOption>
      <Functions>
        <div className="sort">
          <p>sold By</p>
          <p>seller Rating</p>
          <p>seller information</p>
        </div>
        <div className="oppo">
          <p>seller one</p>
          <Images>
            <SmallImages src={yellowStart} />
            <SmallImages src={yellowStart} />
            <SmallImages src={yellowStart} />
            <SmallImages src={yellowStart} />
            <SmallImages src={Start} />
          </Images>
        </div>
      </Functions>
    </Container>
  );
}

export default Details;
const Container = styled.div`
  grid-area: main;
`;
const Heading = styled.div`
  h3 {
    font-size: 28px;
    margin-bottom: 1px;
  }
  p {
    display: none;
  }
  @media (max-width: 768px) {
    h3 {
      display: none;
    }
    p {
      display: block;
    }
  }
`;
const Stars = styled.div`
  display: flex;
  flex-direction: row;
`;
const Image = styled.img`
  width: 25px;
  height: 25px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.5);
  }
`;
const Price = styled.h3`
  h3 {
    font-weight: 400;
    font-size: 25px;
    color: #262626;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    color: #707070;
  }
  border-bottom: 1px solid #bbbbbb;
`;
const SelectionBox = styled.div`
  span {
    font-weight: 400;
    font-size: 14px;
    color: #707070;
  }
`;
const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-right: 5px;
  margin-bottom: 30px;
  div {
    width: 60px;
    height: 35px;
    border: 1px solid #aaaaaa;
    border-radius: 4px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Circles = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 5px;
  border-bottom: 1px solid #bbbbbb;
  div {
    width: 32px;
    height: 32px;
    background-color: #1b8f39;
    border: 1px solid #000;
    border-radius: 100%;
    margin: 5px;
  }
  div:nth-of-type(2n) {
    background-color: #ce3939;
  }
  div:nth-of-type(3n) {
    background-color: #5b92bc;
  }
  div:nth-of-type(4n) {
    background-color: #363636;
  }
  div:nth-of-type(5n) {
    background-color: #707070;
  }
`;

const BuyOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid #bbbbbb;
`;

const Quality = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-family: "Segoe UI";
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #707070;
  }
  div {
    width: 80px;
    height: 30px;
    border: 1px solid #aaaaaa;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    width: 135px;
    height: 40px;
    background: #47afff;
    outline: none;
    border: none;
    margin-top: 40px;
    border-radius: 4px;
    color: #fff;
  }
`;
const Zipcode = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  div {
    width: 120px;
    height: 30px;
    background-color: #fff;
    border: 1px solid #aaaaaa;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    color: #707070;
  }
  p:nth-of-type(2n) {
    text-decoration: underline;
    color: #0a6ebc;
  }
  button {
    width: 135px;
    height: 40px;
    background: #4978e8;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 4px;
  }
`;

const Functions = styled.div`
  display: flex;
  flex-direction: row;
  .sort {
    display: flex;
    flex-direction: column;
    p {
      color: #3a3a3a;
    }
    p:nth-of-type(3n) {
      text-decoration: underline;
      color: #0a6ebc;
    }
  }
  .oppo {
    p {
      font-weight: 600;
      color: #1d6ebe;
      text-decoration-line: underline;
    }
  }
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
`;
const SmallImages = styled.img`
  width: 17px;
  height: 17px;
`;
