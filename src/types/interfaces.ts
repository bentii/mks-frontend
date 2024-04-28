export interface ProductInterface {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
}

export interface CartState {
  items: any[];
  totalQuantity: number;
  changed: boolean;
}

export interface CartStateInterface extends ProductInterface {
  quantity: number;
};

export interface DataInterface {
  products: ProductInterface[];
  count: number;
}

export interface CounterProps {
  addOne: () => void;
  removeOne: () => void;
  quantity: number;
}
