import React, { useState } from "react";
import {
  FormWrapper,
  Form,
  Fieldset,
  LabelComponentForCheckBox,
  Input
} from "./style";
import Title, { TitleLevel, TitleSize } from "/src/components/ui/title/title";
import CheckBox from "/src/components/ui/check-box/check-box";
import Button from "/src/components/ui/button/button";
import OrderPrice from "/src/components/ui/order-price/order-price";

function BuyForm({ products }) {
  const [selectedProductPrice, setSelectedProductPrice] = useState(0);
  const [inputAdress, setInputAdress] = useState("");

  return (
    <FormWrapper>
      <Form
        action="https://echo.htmlacademy.ru/"
        method="post"
        onSubmit={(evt) => {
          evt.preventDefault();
          alert(
            `Вы оформили заказ на сумму: ${selectedProductPrice} руб. Адрес доставки: ${inputAdress}. Спасибо за покупку!`
          );
        }}
      >
        <Fieldset>
          <Title titleLevel={TitleLevel.H2} size={TitleSize.VERYSMALL}>
            Выберите продукты
          </Title>

          {products?.length
            ? products.map((product) => (
                <CheckBox
                  key={product.id}
                  // onClick = {dataUpdate(thumbsSwiper)}
                  onChange={(evt) => {
                    evt.target.checked
                      ? setSelectedProductPrice(
                          selectedProductPrice + product.price
                        )
                      : setSelectedProductPrice(
                          selectedProductPrice - product.price
                        );
                  }}
                  name={product.name}
                  value={product.name}
                  text={product.name}
                  labelComponent={LabelComponentForCheckBox}
                ></CheckBox>
              ))
            : null}
        </Fieldset>

        <Fieldset>
          <Title titleLevel={TitleLevel.H2} size={TitleSize.VERYSMALL}>
            Сделать заказ
          </Title>

          <label htmlFor="adress" className="visually-hidden">
            {" "}
            Введите адрес доставки
          </label>
          <Input
            id="adress"
            name="adress"
            placeholder="Введите адрес доставки"
            onChange={(evt) => setInputAdress(evt.target.value)}
          />

          <OrderPrice totalPrice={selectedProductPrice}></OrderPrice>

          <Button
            submit
            {...(selectedProductPrice === 0 || inputAdress === ""
              ? { disabled: true }
              : {})}
          >
            Купить
          </Button>
        </Fieldset>
      </Form>
    </FormWrapper>
  );
}

export default BuyForm;
