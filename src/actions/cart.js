export var add = (item) => {
  return {
    type: "ADD",
    item: item,
  };
};

export var decrease = (id) => {
  return {
    type: "DECREASE",
    id: id,
  };
};

export var increase = (id) => {
  return {
    type: "INCREASE",
    id: id,
  };
};

export var deleteThis = (id) => {
  return {
    type: "DELETE",
    id: id,
  };
};

export var deleteAll = () => {
  return {
    type: "DELETEALL",
  };
};
