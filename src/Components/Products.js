import React from 'react'
import styled from "styled-components";
import Product from './Product';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Products() {

  return (
    <Container>
        <Header>Recommended Products</Header>
        <ProductsSection data-aos="fade-up">
            <Image src='images/Union 6.png' />
            <Product image='images/image 27.png' title='Hoodie Sweatshirt' price='$31.10'/>
            <Product image='images/image 28.png' title='V Neck Top' price='$29.20'/>
            <Product image='images/image 29.png' title='Short Sleeve' price='$12.85'/>
            <Product image='images/image 30.png' title='Full Sleeve Sweater' price='$17.05'/>
            <Image src='images/Union 6 (1).png' />
        </ProductsSection>
    </Container>
  )
}

export default Products
const Container = styled.div`
display: flex;
flex-direction: column;
margin: 40px;
`
const Header = styled.h3`
font-weight: 400;
font-size: 20px;
line-height: 27px;
color: #707070;
`
const ProductsSection = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`
const Image = styled.img`

`