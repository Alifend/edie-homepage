import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import Item from "./Item";
import Logo from "./Logo";

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
const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setLastScrollY(window.scrollY);
  };

  return (
    <Nav lastScrollY={lastScrollY}>
      <Logo />

      <Hamburger
        onClick={() => {
          setIsActive(!isActive);
        }}
      />

      <ListItems isActive={isActive}>
        {data.map((item, index) => (
          <Item key={index} {...item} close={() => setIsActive(false)} />
        ))}
      </ListItems>
    </Nav>
  );
};

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: ${(props) =>
    props.lastScrollY === 0 ? "none" : "0px 5px 15px -4px rgba(0,0,0,0.3)"};
  transition: box-shadow 0.5s ease;
  height: 84px;
`;

const ListItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 84px;

  @media (max-width: 1100px) {
    /* display: none; */
    position: absolute;
    left: -100%;
    top: 84px;
    flex-direction: column;
    left: ${(props) => (props.isActive ? "0" : "-100%")};
    height: calc(100vh - 84px);
    width: 100%;
    transition: all 0.5s ease;
    background-color: white;

    /* visibility: hidden; */
  }
`;

const Hamburger = styled(FaBars)`
  display: none;
  @media (max-width: 1100px) {
    display: block;
    margin-right: 30px;
  }
`;

export default Navbar;
