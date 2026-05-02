export const categories = [
  { label: "Belleza", value: "beauty" },
  { label: "Perfumes", value: "fragrances" },
  { label: "Cuidado de la piel", value: "skin-care" },
  { label: "Gafas de sol", value: "sunglasses" },
  { label: "Carteras", value: "womens-bags" },
  { label: "Joyas", value: "womens-jewellery" },
];

export const getCategoryLabel = (value) => {
  const category = categories.find((c) => c.value === value);
  return category?.label || value;
};