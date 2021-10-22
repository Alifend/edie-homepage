import React from "react";
import styled from "styled-components";
import ImageURL_1 from "../resources/person1.png";
import ImageURL_2 from "../resources/person2.png";
import ImageURL_3 from "../resources/person3.png";
const Team = () => {
  return (
    <TeamContainer id="Team">
      <Content>
        <TextContainer>
          <Note>Meet the team</Note>
          <Title>We are chilled and a laidback team</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </TextContainer>
        <PhotosContainer>
          <Image area="first" src={ImageURL_1} style={{ width: "90%" }} />
          <Image area="second" src={ImageURL_2} />
          <Image area="third" src={ImageURL_3} />
        </PhotosContainer>
      </Content>
    </TeamContainer>
  );
};

const TeamContainer = styled.div`
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
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 90%;
  @media (max-width: 1100px) {
    flex-direction: column;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  width: 30%;
  height: 90%;
  @media (max-width: 1100px) {
    align-self: center;
    width: 50%;
  }
`;

const PhotosContainer = styled.div`
  width: 50%;
  height: 90%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 53% 43%;
  grid-template-rows: repeat(25%, 4);
  gap: 4%;
  grid-template-areas:
    "...... first"
    "second first"
    "second third"
    "...... third";
  @media (max-width: 1100px) {
    width: 70%;
  }
`;

const Image = styled.img`
  grid-area: ${(props) => props.area};
  width: 100%;
  height: 100%;
  border-radius: 24px;
  object-fit: cover;
`;

const Note = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: #eb5757;
  font-weight: 500;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #333333;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;
export default Team;
