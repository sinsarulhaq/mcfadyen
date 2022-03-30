import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Details from "./Details";
import Seller from "./Seller";

function MainSection() {
  return (
      <Div>
    <Container>
      <Card />

      <Details />

      <Seller />
    </Container>
    </Div>
  );
}

export default MainSection;
const Div = styled.div`
margin: 40px;
`
const Container = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: repeat(3, calc(100% / 3));
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
//minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr)