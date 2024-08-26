"use strict";

function getElementWidth(content, padding, border) {
  const numcontent = Number.parseFloat(content);
  const numpadding = Number.parseFloat(padding);
  const numborder = Number.parseFloat(border);
  const getElementWidth = numcontent + numpadding * 2 + numborder * 2;
  console.log(getElementWidth);
  return getElementWidth;
}

const content = "60px";
const padding = "12px";
const border = "8.5px";
getElementWidth(content, padding, border);
