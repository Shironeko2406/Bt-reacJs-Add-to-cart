import { configureStore } from "@reduxjs/toolkit";
import _ from "lodash";

const stateCartDefault = [];

export const Store = configureStore({
  reducer: {
    cartReducer: (state = stateCartDefault, action) => {
      switch (action.type) {
        case "ADD_ITEM":
          const newItem = { ...action.payload, quantity: 1 };
          state = _.cloneDeep(state);

          const existingItem = state.find((item) => item.id === newItem.id);
          if (existingItem) {
            existingItem.quantity += 1;
          } else {
            state.push(newItem);
          }
          console.log("newItem:", newItem);

          break;

        case "DELETE_ITEM":
          const id = action.payload;
          state = _.cloneDeep(state);

          let index = state.findIndex((item) => item.id === id);
          if (index != -1) {
            state.splice(index, 1);
          }

          break;
        case "INCREMENT_QUANTITY":
          return state.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          break;
        case "DECREMENT_QUANTITY":
          return state.map((item) =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
      }

      return state;
    },
  },
});

// // Store.jsx
// import { configureStore } from "@reduxjs/toolkit";

// const initialState = [];

// export const Store = configureStore({
//   reducer: {
//     cartReducer: (state = initialState, action) => {
//       switch (action.type) {
//         case "ADD_ITEM":
//           const newItem = { ...action.payload };
//           const existingItem = state.find((item) => item.id === newItem.id);

//           if (existingItem) {
//             // Reduce quantity when adding to cart
//             if (existingItem.quantity > 0) {
//               existingItem.quantity -= 1;
//             }
//           } else {
//             // Add item to cart with initial quantity of 1
//             newItem.quantity = 1;
//             state.push(newItem);
//           }
//           return [...state]; // Return updated state

//         default:
//           return state;
//       }
//     },
//   },
// });
