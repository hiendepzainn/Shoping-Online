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
    let newArray = [...state];
    let findObject = newArray.find((x) => x.id === action.id);
    if (findObject.quantity > 1) {
      findObject.quantity--;
      return newArray;
    } else {
      let filtered = state.filter((item) => item.id !== action.id);
      return filtered;
    }
  }

  if (action.type === "INCREASE") {
    let newArray = [...state];
    let findObject = newArray.find((x) => x.id === action.id);
    findObject.quantity++;
    return newArray;
  }

  if (action.type === "DELETE") {
    let newArray = state.filter((item) => item.id !== action.id);
    return newArray;
  }

  if (action.type === "DELETEALL") {
    return [];
  }
  return state;
};

export default cartReducer;
