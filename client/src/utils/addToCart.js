const addToCartLocalStorage = (product) => {
  const currentCart = localStorage.getItem('cart') ?? '';

  if (currentCart.length < 1) {
    localStorage.setItem('cart', `${JSON.stringify([product])}`);
  } else {
    const newCart = JSON.stringify(JSON.parse(currentCart).concat([product]))
    localStorage.setItem('cart', newCart);
  }
}

export default addToCartLocalStorage;