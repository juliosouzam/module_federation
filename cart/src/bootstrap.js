import { faker } from "@faker-js/faker";

export function mount(el) {
  const cartText = `<div>You have ${faker.number.int({
    min: 1,
    max: 50,
  })} items in your cart</div>`;

  el.innerHTML = cartText;
}

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-cart");
  if (element) {
    mount(element);
  }
}
