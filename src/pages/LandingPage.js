import React from "react";
import styled from "styled-components";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import OurWorks from "../components/OurWorks";
import Services from "../components/Services";
import Clients from "../components/Clients";

const LandingPage = () => {
  return (
    <Container id="Home">
      <Navbar />
      <Home />
      <Services />
      <OurWorks />
      <Team />
      <Clients />
      <Contact />
    </Container>
  );
};

const Container = styled.div``;

export default LandingPage;
