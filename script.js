import * as shoppingCart from "./shoppingCart.js";
// import  cloneDeep  from './node_modules/lodash-es/cloneDeep.js';
import { cloneDeep } from 'lodash-es';
import 'core-js';
import 'regenerator-runtime';
console.log("importing module");
// shoppingCart.getCart();
// shoppingCart.addToCart("ombrello",4);
// shoppingCart.addToCart("carro armato",10);
// shoppingCart.getCart();
//
// const test=await fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(test);

const shop=(function() {
  const cart=[];
  const shippingCost=10;
  const totalPrice=237;
  const totalQuantity=23;

  const addToCart=function(prod,q) {
    cart.push({prod,q});
    console.log(prod,q);
  }

  const getCart=function() {
    console.log(cart);
    return cart;
  }
  return {
    addToCart,
    // cart,
    totalPrice,
    totalQuantity,
    getCart
  };
})();

shop.addToCart("tv",2);
shop.getCart();
const clonedObj=cloneDeep(shop.getCart());
console.log(clonedObj);

if (module.hot){
  module.hot.accept();
}


console.log("hello");

// const testBabel=shop.getCart().find(el=>this[0]===el);
// console.log(testBabel);
// console.log(module.hot);

