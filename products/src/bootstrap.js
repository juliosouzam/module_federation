import { faker } from "@faker-js/faker";

export function mount(el) {
  const products = [];
  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products.push(name);
  }

  el.innerHTML = products.map((product) => `<div>${product}</div>`).join("\n");
}

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-products");
  if (element) {
    mount(element);
  }
}
