import { mount as mountProducts } from "products/ProductIndex";
import {mount as mountCart } from "carts/CartShow";

mountProducts(document.querySelector("#prod-products"));
mountCart(document.querySelector("#prod-cart"));
