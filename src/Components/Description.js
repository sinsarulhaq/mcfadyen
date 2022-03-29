import React from "react";
import styled from "styled-components";

function Description() {
  return (
    <Container>
      <Hero>
        <h3>Description</h3>
        <p>
          The Women Solid Color Waterfall Neck Knitted Cardigan is made out of
          soft knit fabric. This cardigan features a waterfall neck and solid
          color. A perfect option for your casual occasion. Take a look at our
          store "Nlife LLC", you will find more what you want!Note: Please refer
          to our size image chart before order. That’s the size for this item.
        </p>
        <li>Lightweight knit blended fabric, nice wear resistance and wrinkle resistance, last longer without pilling.</li>
        <li>Waterfall neck, long sleeve, solid color, open front, casual style for everyday comfort.</li>
        <li>Fits for daily wear, school, vacation, work. Easy to pair with jeans, skinny leggings, boots in spring, autumn fall and winter.</li>
      </Hero>
    </Container>
  );
}

export default Description;
const Container = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: column;
`;

const Hero = styled.div`
h3{
font-weight: 400;
font-size: 20px;
color: #707070;
}
p{
    font-weight: 400;
font-size: 16px;
color: #707070;
line-height: 28px;
word-spacing: 7px;
}
li{
    font-weight: 400;
font-size: 16px;
color: #707070;
line-height: 28px;
word-spacing: 7px; 
}
`