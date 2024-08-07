const removeFromCartLocalStorage = (index) => {
  const currentCart = localStorage.getItem('cart') ?? '';

  if (currentCart.length > 0) {
    const currentCartParsed = JSON.parse(currentCart);
    const updatedCartParsed = currentCartParsed.filter((_, i) => i !== index);

    localStorage.setItem('cart', JSON.stringify(updatedCartParsed));
  }
}

export default removeFromCartLocalStorage;