console.log("exporting module");

const shippingCost=10;
const cart=[];

export const addToCart=function(prod,q) {
  cart.push({prod,q});
  console.log(prod,q);
}

export const getCart=function() {
  console.log(cart);
  return cart;
}