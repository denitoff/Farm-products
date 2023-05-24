import React from "react";
import About from "/src/components/blocks/about/about";
import Benefits from "/src/components/blocks/benefits/benefits";

function MainPage({ cards }) {
  return (
    <main>
      <About></About>
      <Benefits cards={cards}></Benefits>
    </main>
  );
}

export default MainPage;
