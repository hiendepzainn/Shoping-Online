var cartReducer = (state = [], action) => {
  if (action.type === "ADD") {
    if (state.find((x) => x.id === action.item.id) === undefined) {
      let newItem = {
        id: action.item.id,
        thumbnail: action.item.thumbnail,
        title: action.item.title,
        price: action.item.price,
        discountPercentage: action.item.discountPercentage,
        quantity: 1,
      };

      let newArray = [...state, newItem];
      return newArray;
    } else {
      let newArray = [...state];
      let findObject = newArray.find((x) => x.id === action.item.id);
      findObject.quantity++;
      return newArray;
    }
  }

  if (action.type === "DECREASE") {
  }

  if (action.type === "INCREASE") {
  }

  if (action.type === "DELETE") {
  }

  if (action.type === "DELETEALL") {
  }
  return state;
};

export default cartReducer;
