import React from "react";
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <ContactContainer id="ContactUs">
      <Navigation>
        {data.map((item, index) => (
          <a
            href={"#" + item.name}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <p key={index}> {item.name}</p>{" "}
          </a>
        ))}
      </Navigation>
      <SocialNetworks>
        <Title>Edie</Title>
        <LogosContainer>
          <FaInstagramSquare /> <FaLinkedin /> <FaTwitterSquare />
        </LogosContainer>
      </SocialNetworks>
      <Form>
        <ContactForm color={"white"} />
      </Form>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  background: #100e1d;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    height: 600px;
    align-items: flex-start;
    box-sizing: border-box;
    padding-left: 40px;
    padding-top: 20px;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 20%;
  height: 70%;
  gap: 20px;
  color: white;
`;

const SocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 20%;
  height: 90%;
  font-weight: 800;
  font-size: 36px;
  line-height: 53px;
  color: #f2f2f2;
  font-family: Heebo;
`;
const LogosContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
`;
const Form = styled.div`
  width: 40%;
  height: 90%;
`;
const Title = styled.p`
  margin-top: 35px;
`;

const data = [
  {
    name: "Home",
  },
  {
    name: "Services",
  },
  {
    name: "OurWorks",
  },
  {
    name: "Team",
  },
  {
    name: "Clients",
  },
  {
    name: "ContactUs",
  },
];
export default Contact;
