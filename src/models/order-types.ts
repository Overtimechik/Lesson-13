export interface Product {
  id: string;
  name: string;
  price: number;
}
export interface Shop {
  id: string;
  name: string;
  city: string;
  address: string;
  products: Product[];
}
export interface Client {
  id: string;
  firstName: string;
  lastName: string;
}
export type DeliveryType =
  | {
      street: string;
      house: string;
      entrance?: string;
      floor?: string;
      apartment: number;
      comment?: string;
    }
  | {
      poinName: string;
      address: string;
    };

export interface Delivery {
  dataTime: Date;
  type: DeliveryType;
}
export type BasketProduct = {
  shopId: string;
} & Product;
export interface Basket {
  products: BasketProduct[];
  total: number;
}
export interface Order {
  client: Client;
  delivery: Delivery;
  basket: Basket;
}
