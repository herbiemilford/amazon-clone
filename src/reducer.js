export const initialState = {
  basket: [
    {
      id: "43221341",
      title:
        "Echo Plus (2nd Gen) - Premium sound with built-in smart home hub - Sandstone",
      price: 579.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51sz+A576qL._AC_SY240_.jpg"
    }
  ],
  user: null
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      //Logic for Removing item from basket

      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket, remove it.
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as it is not in basket`
        );
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
