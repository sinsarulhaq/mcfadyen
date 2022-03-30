import React from 'react'
import styled from "styled-components";

function Product({image, title, price}) {
  return (
    <Card>
        <Image>
            <img src={image} alt="" />
        </Image>
        <Hero>{title}</Hero>
        <Price>{price}</Price>
        <Button>Shop Now</Button>
     </Card>
  )
}

export default Product
const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 20px;
width: 220px;
height: 345px;
border: 1px solid #D8D8D8;
`
const Image = styled.div`
img{
    width: 160px;
    height: 160px;
    object-fit: contain;
}
`
const Hero = styled.h3`
font-weight: 400;
font-size: 16px;
`

const Price = styled(Hero)`
 color: #262626;
 font-size: 18px;
`

const Button = styled.button`
width: 125px;
height: 34px;
background: #47AFFF;
outline: none;
border: none;
border-radius: 4px;
color: #FFFFFF;
`