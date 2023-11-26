export const getTotalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0)
}
