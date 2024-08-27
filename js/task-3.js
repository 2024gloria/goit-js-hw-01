"use strict";

function getElementWidth(content, padding, border) {
  const numcontent = Number.parseFloat(content);
  const numpadding = Number.parseFloat(padding);
  const numborder = Number.parseFloat(border);
  console.log(numcontent + numpadding * 2 + numborder * 2);
  return getElementWidth;
}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
