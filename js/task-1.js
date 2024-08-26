"use strict";

function makeTransaction(quantity, pricePerDroid) {
  const makeTransaction = `You ordered ${quantity} droids worth ${
    quantity * pricePerDroid
  } credits!`;
  console.log(makeTransaction);
  return makeTransaction;
}

const quantity = 5;
const pricePerDroid = 3000;
makeTransaction(quantity, pricePerDroid);
