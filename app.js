import { createStore } from "redux";

// const initialState = 0;
const initialState = {
  recipes: [
    {
      name: "Omelette",
    },
  ],
  ingredientes: [
    {
      recipe: "Omellete",
      name: "Egg",
      quantity: 2,
    },
  ],
};

// Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      state.recipes.push({ name: action.name });
  }
  return state;
};

const store = createStore(reducer, initialState);

// store.subscribe(
//   () => (document.getElementById("counter").innerText = store.getState())
// );

// setInterval(() => store.dispatch({ type: "INC" }), 500);

window.store = store;

console.log("Redux started");
