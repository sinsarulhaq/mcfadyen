import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Rows>
      <Address>
        <div className="logos">
          <img src="images/phone.png" alt="" />
          <p>1800 420 0707</p>
        </div>
        <p>@ customercare@company.com</p>
        <div className="logos">
          <img src="images/location.png" alt="" />
       
          <p>Address line 1Address line 2</p>
        </div>
      </Address>
      <Company>
        <h2>Company</h2>
        <p>About us</p>
        <p>Sell with us</p>
        <p>Our Sellers</p>
      </Company>
      <Information>
        <h2>INFORMATION</h2>
        <p>Privacy Policy</p>
        <p>Exchange and Returns Policy</p>
        <p>Terms and conditions</p>
        <p>Common questions</p>
      </Information>
      <NewsLetter>
        <h3>SUBSCRIBE NEWSLETTER</h3>
        <div className="form">
          <input type="text" placeholder="Enter your email address" />
          <button>Submit</button>
        </div>
        <Image src='images/socialmedia.png' />
      </NewsLetter>
      </Rows>
      <GroupImage>
      <PaymentImage src='images/payment.png' />
      </GroupImage>
      <CopyRightSection>
        <span>Copyrights © 2021 Company Ltd. All rights reserved.</span>
      </CopyRightSection>
    </Container>
  );
}

export default Footer;
const Container = styled.div`
color: #fff;
background-color: #111111;
padding-bottom: 20px;
`;
const Rows = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;  
`
const Address = styled.div`
  padding-top: 20px;
  p {
    font-weight: 400;
    line-height: 1px;
    font-size: 16px;
  }
  .logos {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    img {
      width: 13px;
      height: 13px;
    }
  }
`;

const Company = styled.div`
  display: flex;
  flex-direction: column;
  padding: -6px;
  h3 {
    font-weight: 700;
    font-size: 18px;
  }
  p {
    font-weight: 400;
    line-height: 1px;
    font-size: 16px;
  }
`;

const Information = styled(Company)``;

const NewsLetter = styled(Company)`
  .form {
    line-height: 1;
  }
  input {
    width: 250px;
    height: 40px;
    outline: none;
    border-radius: 4px;
    padding: 5px;
  }
  button {
    width: 90px;
    height: 52px;
    background: #4978e8;
    border: none;
    border-radius: 4px;
  }
`;

const Image = styled.img`
padding-top: 40px;
width: 150px;
height: 30px;
`
const GroupImage = styled.div`
border-bottom: 1px solid #505050;
`
const PaymentImage = styled.img`
  padding: 25px 20px 10px 50px;
`
const CopyRightSection = styled.div`
padding-top: 20px;
display: flex;
align-items: center;
justify-content: center;
span{
font-weight: 400;
font-size: 14px;
}
`