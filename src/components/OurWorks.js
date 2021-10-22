import React from "react";
import styled from "styled-components";
import ImageURL_1 from "../resources/smarthome.jpg";
import ImageURL_2 from "../resources/onboard.png";
import ImageURL_3 from "../resources/booking.png";
import ImageURL_4 from "../resources/juice-product.png";
import Project from "./Project";

const data = [
  {
    image: ImageURL_1,
    type: "Full Stack Application",
    name: "Smart Home Dashboard",
    id: 1,
  },
  {
    image: ImageURL_2,
    type: "UX/UI design",
    name: "Onboard application",
    id: 2,
  },

  {
    image: ImageURL_3,
    type: "Mobile application",
    name: "Booking system",
    id: 3,
  },
  {
    image: ImageURL_4,
    type: "Front End application",
    name: "Juice product homepage",
    id: 4,
  },
];
const OurWorks = () => {
  return (
    <OurWorksContainer id="OurWorks">
      <Content>
        <Title>Good design means good business</Title>
        <ProjectsContainer>
          {data.map((project) => {
            return <Project {...project} key={project.id} />;
          })}
        </ProjectsContainer>
        <Footer></Footer>
      </Content>
    </OurWorksContainer>
  );
};

const OurWorksContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 100px;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #333333;
  width: clamp(267px, 267 + 10%, 30%);
  margin-left: 100px;
  @media (max-width: 1223px) {
    align-self: center;
    margin-left: 30px;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1700px;
`;

const Footer = styled.div``;
export default OurWorks;
