"use strict";

function getElementWidth(content, padding, border) {
  const numcontent = Number.parseFloat(content);
  const numpadding = Number.parseFloat(padding);
  const numborder = Number.parseFloat(border);
  const getElementWidth = numcontent + numpadding * 2 + numborder * 2;
  console.log(getElementWidth);
  return getElementWidth;
}

const content = "50px";
const padding = "8px";
const border = "4px";
getElementWidth(content, padding, border);
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
