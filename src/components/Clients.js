import React from "react";
import styled from "styled-components";
import Image from "../resources/person4.png";
const Clients = () => {
  return (
    <ClientsContainer id="Clients">
      <TextContainer>
        <p>
          “Fast and outstanding results. Edie understands their customer’s
          needs. They have a young and talented team.”
        </p>
      </TextContainer>
      <AuthorContainer>
        <Logo src={Image} />
        <InfoContainer>
          <Name>Carlos Tran</Name>
          <Position>The Decorate Gatsby</Position>
        </InfoContainer>
      </AuthorContainer>
    </ClientsContainer>
  );
};

const ClientsContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  width: 60%;
  height: auto;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #333333;
  margin-bottom: 30px;
  @media (max-width: 900px) {
    font-size: 24px;
    line-height: 36px;
    width: 90%;
  }
`;

const AuthorContainer = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 900px) {
    width: 90%;
  }
`;

const Logo = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 15px;
`;

const Name = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #333333;
`;
const Position = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #828282;
`;

const InfoContainer = styled.div`
  box-sizing: border-box;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export default Clients;
