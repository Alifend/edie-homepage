import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { FaCode, FaPen, FaServer } from "react-icons/fa";

const data = [
  {
    Icon: FaPen,
    title: "UI/UX Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
    color: "#2D9CDB",
  },
  {
    Icon: FaCode,
    title: "Front End",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
    color: "#27AE60",
  },
  {
    Icon: FaServer,
    title: "Back End",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
    color: "#EB5757",
  },
];
const Services = () => {
  return (
    <ServicesContainer id="Services">
      <Content>
        <Title>We offer high demand services</Title>
        <CardList>
          {data.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </CardList>
      </Content>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 90%;
  width: 80%;

  @media (max-width: 1295px) {
    width: 96%;
    align-items: center;
  }
`;

const Title = styled.div`
  font-size: 36px;
  line-height: 54px;
  color: #333333;
  width: 30%;
  height: auto;
  @media (max-width: 1100px) {
    width: 80%;
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
  }
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 990px) {
    flex-wrap: wrap;
  }
  @media (max-width: 360px) {
    flex-direction: column;
  }
`;
export default Services;
