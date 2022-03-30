import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <Container>
      <File>
        <p>
          Home {">"} Category {">"} Sub {">"} Category {">"} Product
        </p>
        <h3>Product Name</h3>
      </File>

      <ImageSections>
        <VerticalImages>
          <FirstImage />
          <SecondImage />
          <ThirdImage />
          <FourthImage />
        </VerticalImages>
        <MainImage />
      </ImageSections>
    </Container>
  );
}

export default Card;
const Container = styled.div`
  grid-area: leftside;
`;
const File = styled.div`
  h3 {
    display: none;
    font-weight: 600;
    font-size: 36px;
    color: #707070;
  }
  p {
    font-size: 12px;
    color: #b8b8b8;
  }
  @media (max-width: 768px) {
    p {
      display: none;
    }
    h3 {
      display: block;
    }
  }
`;
const ImageSections = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const VerticalImages = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const FirstImage = styled.div`
  width: 50px;
  height: 50px;
  padding: 6px;
  background: url("images/dfg.png") center center no-repeat;
  border: 2px solid #4978e8;
  border-radius: 4px;
  margin-bottom: 5px;
`;
const SecondImage = styled(FirstImage)`
  background: url("images/black.png") center center no-repeat;
`;
const ThirdImage = styled(FirstImage)`
  background: url("images/gray.png") center center no-repeat;
`;
const FourthImage = styled(FirstImage)`
  background: url("images/dfg.png") center center no-repeat;
`;

const MainImage = styled.div`
  width: 300px;
  height: 280px;
  object-fit: contain;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  background: url("images/mainimage.png") center center no-repeat;
`;
