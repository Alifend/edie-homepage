import React from "react";
import styled from "styled-components";

const Item = ({ name, close }) => {
  return (
    <a href={"#" + name} style={{ color: "inherit", textDecoration: "none" }}>
      <SingleItem onClick={close}>{name}</SingleItem>{" "}
    </a>
  );
};

const SingleItem = styled.div`
  display: flex;
  height: 100%;
  width: 100px;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  margin-left: 25px;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 12px;

  transition: filter 0.3s ease;
  transition: font-size 0.3s ease;
  :hover {
    background-color: opacity(0.7);
    filter: opacity(0.7);
    font-size: larger;
  }
  box-sizing: border-box;
`;
export default Item;
