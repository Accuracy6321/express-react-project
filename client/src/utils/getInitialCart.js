const getInitialCart = () => {
  const currentCart = localStorage.getItem('cart');

  if (currentCart) {
    return JSON.parse(currentCart);
  } else {
    return [];
  }
}

export default getInitialCart;