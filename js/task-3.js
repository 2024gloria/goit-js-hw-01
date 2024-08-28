"use strict";

function getElementWidth(content, padding, border) {
  const numcontent = Number.parseFloat(content);
  const numpadding = Number.parseFloat(padding);
  const numborder = Number.parseFloat(border);
  const totalWidth = numcontent + numpadding * 2 + numborder * 2;
  return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
