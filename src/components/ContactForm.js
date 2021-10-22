import React from "react";
import styled from "styled-components";

const ContactForm = ({ color }) => {
  return (
    <>
      <LittleText color={color}>Want us to contact you?</LittleText>
      <EmailContainer>
        <Input placeholder="Email"></Input>
        <Button>Join</Button>
      </EmailContainer>
    </>
  );
};

const EmailContainer = styled.div`
  background: #f2f2f2;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  height: 47px;
`;

const Input = styled.input`
  border: none;
  background: #f2f2f2;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #828282;
  }
  box-sizing: border-box;
  padding: 5px;
  margin-left: 15px;
`;

const Button = styled.button`
  background: #2d9cdb;
  border-radius: 12px;
  padding: 12px 30px;
  color: white;
  border: none;
  cursor: pointer;
  transition: filter 0.3s ease;
  :hover {
    filter: opacity(0.7);
  }
  margin-right: 10px;
`;

const LittleText = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.color};
  margin-top: 40px;
  margin-bottom: 10px;
  @media (max-width: 980px) {
    font-size: 10px;
  }
`;
export default ContactForm;
