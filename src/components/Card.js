import React from "react";
import styled from "styled-components";

const Card = ({ Icon, title, text, color }) => {
  return (
    <CardContainer>
      <IconWrapper style={{ backgroundColor: color }}>
        <Icon size={27} color={"white"} />
      </IconWrapper>

      <Title>{title}</Title>
      <Text>{text}</Text>
      <Button>Get Started</Button>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  min-height: 422px;
  /* max-width: 341px;
  min-width: 341px; */
  width: clamp(310px, 340px + 10%, 341px);
  max-height: 422px;
  border-radius: 24px;
  margin-right: 15px;
  padding-left: 30px;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);
    Button {
      background-color: #2d9cdb;
      color: white;
    }
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #333333;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;

const Button = styled.button`
  background: #e0e0e0;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: none;
  padding: 10px 10px;
  color: #828282;
  cursor: pointer;
  font-size: 16px;
`;

const IconWrapper = styled.div`
  border-radius: 16px;
  height: 67px;
  width: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Card;
