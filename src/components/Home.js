import React from "react";
import styled from "styled-components";
import ImageURL from "../resources/heroImage.jpg";
import ContactForm from "./ContactForm";
const Home = () => {
  return (
    <HomeContainer>
      <TitleContainer>
        <TitleSubContainer>
          <Note>Unhappy with your website?</Note>
          <Title>We create beautiful and fast web services</Title>
        </TitleSubContainer>
      </TitleContainer>
      <Image src={ImageURL} />
      <TextContainer>
        <TextSubContainer>
          <Title>Story, emotion and purpose</Title>
          <Text>
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </Text>
          <ContactForm color={"#828282"} />
        </TextSubContainer>
      </TextContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 980px) {
    height: auto;
  }
`;

const TitleContainer = styled.div`
  width: 70%;
`;

const TitleSubContainer = styled.div`
  width: 55%;
  width: clamp(350px, 350px + 10%, 55%);
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  color: #333333;
  /* height: 120px; */
  @media (max-width: 980px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  width: 70%;
  height: auto;
`;

const TextSubContainer = styled.div`
  width: clamp(370px, 370px + 20%, 36%);
  height: auto;
  margin-top: 35px;
  @media (max-width: 980px) {
    width: 80%;
  }
`;

const Image = styled.img`
  width: 90%;
  /* min-width: 348px;
  min-height: 145px; */
  max-height: 354px;
  border-radius: 18px;
  object-fit: cover;
`;
const Title = styled.p`
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  color: #333333;
  @media (max-width: 980px) {
    font-size: 24px;
    line-height: 45px;
  }
`;
const Text = styled.p`
  width: 100%;
  margin-top: 40px;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #4f4f4f;
  @media (max-width: 980px) {
    font-size: 12px;
    margin-top: 10px;
    line-height: 18px;
  }
`;

const Note = styled.p`
  font-size: 18px;
  margin-top: 30px;
  line-height: 27px;
  color: #2d9cdb;
`;

export default Home;
