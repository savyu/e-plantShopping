import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  
  reducers: {
    /*addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        const existingItem = state.items.find((item) => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        }else {
            state.items.push({name, image, cost, quantity: 1});
        }
    },*/
        addItem: (state, action) => {
          const newItem = action.payload;
          console.log('newItem', newItem);
          const existingItem = state.items.find(
            (item) => item.name === newItem.name
          );
          console.log('existingItem', existingItem);
          if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
          } else {
            state.items.push({ ...newItem, quantity: 1 });
          }
    
          // Log the total list of items in the cart for debugging
          console.log('Current Cart Items:', state.items);
        },
        // Add other reducers as needed


    removeItem: (state, action) => {
        const {name, image, cost} = action.payload;
        console.log('before removeItem:', state.items);
        state.items = state.items.filter((item) => item.name !== name);
        console.log('after removeItem:', state.items);

        /*
                return{
            //...state,
            //items: state.items.filter(item => item.name !== action.payload), //these 2 lines are from tweaks from coach and previous projects
            //state.items = state.items.filter(item => item.name !== action.payload) //sample solution
        }
        */
    },

      updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const existingItem = state.items.find((item) => item.name === name);
        if (existingItem) {
          existingItem.quantity = Math.max(1, quantity);
        }
      },
      incrementQuantity: (state, action) => {
        const name = action.payload.name;
        const existingItem = state.items.find((item) => item.name === name);
        if (existingItem) {
          existingItem.quantity += 1;
        }
      },
      decrementQuantity: (state, action) => {
        const name = action.payload.name;
        const existingItem = state.items.find((item) => item.name === name);
        if (existingItem) {
          existingItem.quantity = Math.max(1, existingItem.quantity - 1);
        }
      },
  },
});

export const { addItem, removeItem, updateQuantity, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
