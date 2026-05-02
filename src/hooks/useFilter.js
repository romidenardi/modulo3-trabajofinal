import { useMemo, useState } from "react";

export const useFilter = (products = []) => {

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return {
    search,
    setSearch,
    filtered,
  };
  
};