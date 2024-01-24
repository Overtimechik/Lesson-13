import { catalogue } from "./src/models/Catalog";
import { BasketProduct, Client } from "./src/models/order-types";
import { DeliveryType } from "./src/models/order-types";
import { Order } from "./src/models/order-types";

export const user: Client = {
  id: "c4bf3184-b21d-4d8a-a2eb-4c1e183b3003",
  firstName: "Андрей",
  lastName: "Жучко",
};
export const myAddres: DeliveryType = {
  street: "Вильс",
  house: "23/3",
  apartment: 51,
};
const order: Order = {
  client: user,
  delivery: {
    dataTime: new Date(),
    type: myAddres,
  },
  basket: {
    products: [],
    total: 0,
  },
};
const products: BasketProduct[] = [];
for (let i = 0; i < 5; i++) {
  const random = Math.floor(Math.random() * 50);
  const selectedProduct = catalogue.products[random];
  products.push(selectedProduct);
}
order.basket = {
  products,
  total: products.reduce(
    (sum, currentProduct) => sum + currentProduct.price,
    0
  ),
};
console.log(order);
