"use strict";

function getShippingMessage(country, price, deliveryFee) {
  const getShippingMessage = `Shipping to ${country} will cost ${
    price + deliveryFee
  } credits`;
  console.log(getShippingMessage);
  return getShippingMessage;
}

const country = "Australia";
const price = 120;
const deliveryFee = 50;
getShippingMessage(country, price, deliveryFee);
