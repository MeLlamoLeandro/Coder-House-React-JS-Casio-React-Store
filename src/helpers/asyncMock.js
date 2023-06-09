import data from "../data/data.json";

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.find((prod) => prod.id === productId));
    }, 500);
  });
};
