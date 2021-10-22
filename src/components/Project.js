import React from "react";
import styled from "styled-components";

const Project = ({ image, type, name, id }) => {
  return (
    <ProjectContainer id={id}>
      <Image src={image} />
      <Type>{type}</Type>
      <Name>{name}</Name>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.id % 2 === 0 ? "flex-start" : "flex-end"};
  height: 700px;
  width: clamp(330px, 330px + 30%, 572px);
  /* background-color: pink; */
  margin: 20px;
  @media (min-width: 1582px) {
    justify-content: flex-start;
  }
`;

const Image = styled.img`
  border-radius: 30px;
  width: 100%;
  height: 75%;
  object-fit: cover;
`;

const Type = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #828282;
  margin: 12px 0px;
`;

const Name = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #333333;
`;
export default Project;
