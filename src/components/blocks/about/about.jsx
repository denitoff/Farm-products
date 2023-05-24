import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { StyledSection, Text } from "./style";

function About() {
  return (
    <StyledSection>
      <Title size={TitleSize.BIG} titleLevel={TitleLevel.H1}>
        Магазин фермерских <br /> продуктов с доставкой
      </Title>
      <Text className="paragraph about__paragraph">
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </Text>
    </StyledSection>
  );
}

export default About;
