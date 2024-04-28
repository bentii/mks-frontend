"use client";
import Product from "../Product/Product";
import "./_Products.styles.scss";
import { api } from "../../api/api";
import { ProductInterface, DataInterface } from "../../types/interfaces";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "../Skeleton";

const page = 1;
const rows = 8;
const orderBy = "id";
const sortBy = "ASC";

const Products = ({
  addToCart,
}: {
  addToCart: (product: ProductInterface) => void;
}) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.getProducts(page, rows, orderBy, sortBy),
  });

  return (
    <div className="Products">
      <div className="ContainerProducts">
        {isLoading && Array(rows).fill(<Skeleton />)}
        {isError && <p>Error</p>}
        {data &&
          data.products.map((product: ProductInterface) => (
            <Product key={product.id} {...product} addToCart={addToCart} />
          ))}
      </div>
    </div>
  );
};

export default Products;
