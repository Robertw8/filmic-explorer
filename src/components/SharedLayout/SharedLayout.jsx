import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../../styles/globalStyles";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <NavBar />
        </Header>
      </Container>
      <Suspense fallback={<Loader top="100%" />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default SharedLayout;
