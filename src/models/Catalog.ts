import { BasketProduct, Shop } from "./order-types";
import data from "./../data/data.json";
export class Catalog {
  private _data: Shop[] = [];
  constructor() {
    this._data = data;
  }
  get products() {
    const list: BasketProduct[] = [];

    this._data.forEach(({ products, id }) => {
      products.forEach((product) => {
        list.push({ shopId: id, ...product });
      });
    });
    return list;
  }
}
export const catalogue = new Catalog();
