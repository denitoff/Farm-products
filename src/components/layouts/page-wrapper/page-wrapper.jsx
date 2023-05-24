import React from "react";

import Header from "/src/components/layouts/header/header";
import Footer from "/src/components/layouts/footer/footer";
import { StyledPageWrapper } from "./style";
import { Outlet } from "react-router-dom";

function PageWrapper({ ...prop }) {
  return (
    <StyledPageWrapper>
      <Header />
      <Outlet />

      <Footer />
    </StyledPageWrapper>
  );
}

export default PageWrapper;
