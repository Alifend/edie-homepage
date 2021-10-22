import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <LogoContainer>Edie</LogoContainer>;
};

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Heebo;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 53px;
  color: #333333;
  margin-left: 52px;
`;
export default Logo;
