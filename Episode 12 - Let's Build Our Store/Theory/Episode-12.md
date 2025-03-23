## Namaste React Course by Akshay Saini

# Episode 12 - Let's Build Our Store

# Advantages of using Redux Toolkit over Redux

- Redux: is not mondatory thing to use our application, and it is not a only librarie to manage state: Zustand,
- Redux and React is Diffrent libraries
- Redux toolkit is a newer way of redux
- Redux Toolkit Redux ka modern aur optimized version hai, jo complex state management ko easy, fast, aur scalable banata hai.
- Redux store is very big JS Object , wich has a lot of data in it, store in a global central space

# Explain Dispatcher.

- Explain Reducer.
- Explain Slice.
- Explain Selector.
- Explain createSlice and the configuration it takes.

🔥 Redux Flow (Step-by-Step) :
"file:///Users/aayushpatidar/Desktop/Interview/REACT/Namaste-react/Episode%2012%20-%20Let's%20Build%20Our%20Store/Redux-Flow.png"

1️⃣ User clicks "Add to Cart" button
2️⃣ Button ek action dispatch karta hai (dispatch(addItem(item)))
3️⃣ Action addItem() reducer function ko call karta hai
4️⃣ Reducer function state modify karta hai aur naya cart state return karta hai
5️⃣ Redux store update hota hai aur UI refresh hoti hai

# User clicks the button —> Dispatch an action —> Action calls a function (Reducer)—> Function modifies the cart slice and it is subscribe to store(component) using a selecter

- so when the user clicks on the Add button , it dispatches an action. this action calls the reducer function and this reducer function updates the slice

- We can read the data from the store by something known as Selectors.
- When we use a selector to read the data, this phenomenon is known as Subscribing to the store

🛍️ Redux Store Se Data Read Karna (Selectors & Subscription)
✅ Redux me agar store ka data UI me dikhana hai, toh "Selectors" ka use karte hain.
✅ Jab ek component selector ka use karta hai, toh uska store se "Subscription" ho jata hai.
✅ Agar store me data change hota hai, toh wo component automatically update ho jata hai.

- npm install @reduxjs/toolkit react-redux

# create configurre the store

```js
// Redux ka configureStore() function use karke ek store banate hain.
// Yeh store saari states ko manage karega.

appStore.js;

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({});

export default appStore;
```

# Provider the store to the application

```js
// Provider component use karte hain jo react-redux se aata hai.
// Provider ka kaam hota hai store ko poore app me accessible banana.

// Provider ko React app ke root component ke upar wrap kar dete hain.
// Isme store prop pass karna padta hai jo humne pehle configureStore() se banaya tha.

App.js;

import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
```

# create a SLice : it is return an object which has following properties: *name, *IntialState, \*Reducer()

● The initialState is the state which a slice has in the beginning before it gets modified.
● Reducers have actions and these actions have callback functions

● addItem is a reducer function which is called as an action(action Ek object hai jo batata hai ki state me kya change karna hai.)

```js
cartSlice.js;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload); // action ke through data bhej rahe hai
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});
```

## References:

- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
