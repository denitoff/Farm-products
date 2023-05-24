import React from "react";

import PageWrapper from "/src/components/layouts/page-wrapper/page-wrapper";
import bfList from "/src/mocks/bfList";
import products from "/src/mocks/products";
import { GlobalStyle } from "./style";
import { AppRoutes } from "/src/app-routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "/src/components/pages/main-page/main-page";
import Buy from "/src/components/pages/buy-page/buy-page";

import ScrollToTop from "../ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoutes.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage cards={bfList} />} />
            <Route path={AppRoutes.BUY} element={<Buy products={products} />} />

            <Route
              path="*"
              element={
                <h1
                  style={{ marginTop: 200, marginLeft: 300, marginBottom: 200 }}
                >
                  404... Sorry, page not found
                </h1>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
