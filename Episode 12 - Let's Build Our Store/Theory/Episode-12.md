## Namaste React Course by Akshay Saini

# Episode 12 - Let's Build Our Store

# Advantages of using Redux Toolkit over Redux

- Redux: is not mondatory thing to use our application, and it is not a only librarie to manage state: Zustand,
- Redux and React is Diffrent libraries
- Redux toolkit is a newer way of redux
- Redux Toolkit Redux ka modern aur optimized version hai, jo complex state management ko easy, fast, aur scalable banata hai.
- Redux store is very big JS Object , wich has a lot of data in it, store in a global central space

- Explain Dispatcher.

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

1. # create configurre the store
   ● Redux store ko create karna - configureStore() ka use karke.
   ● Slices (Reducers) ko combine karna - Jitne bhi slices (cartSlice.js, userSlice.js etc.) honge, unko store me add karega.
   ● React app ko Provider ke through store ka access dena.

```js
// Redux ka configureStore() function use karke ek store banate hain.
// Yeh store saari states ko manage karega.

appStore.js;

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({});

export default appStore;
```

2. # Provider the store to the application

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

3. # create a SLice : it is return an object which has following properties: *name, *IntialState, \*Reducer()

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

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
```

4. # Subscribing to the store
   ● We can subscribe to the store using a selector to read the data of the store.
   ● Redux offers a hook named useSelector which can be used to subscribe to the store.
   ● This useSelector gives us access to the store where we can find the cart.items
   ● The items of the cart will be stored in cartItems which we can use in our component
   ● If there is a change in any of those state variables, then it will re-render the cart component as well.

```js
import { useSelector } from "react-redux";

const Header = () => {
  // Suscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  return <li className="px-4 font-bold">Cart - ({cartItems.length} Items)</li>;
};
```

5. # Dispatch an action
   ● React-redux offers a hook to dispatch an action i.e. useDispatch.argument i.e. payload (apple).
   ● When an action is dispatched, an object is created. This objecj This hook returns a function i.e. dispatch().
   ● The dispatch() function takes an argument i.e. addItem action.

```js
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  // console.log(dummy);

  const dispatch = useDispatch();

  const handelAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="w-3/12 p-4">
      <div className="absolute">
        <button
          className="p-1 m-0.5 mx-16  rounded-lg bg-black text-white shadow-lg  "
          onClick={() => handelAddItem(item)}>
          Add +
        </button>
      </div>
    </div>
  );
};
```

✅ Redux store ek "state container" hai jo data ko hold karta hai.
✅ Jab dispatch(addItem()) call hota hai, Redux state change ho jati hai.
✅ Redux automatically connected components ko re-render karta hai.
✅ useSelector() Redux store se data fetch karta hai.
✅ useDispatch() Redux store me data update karta hai.

🔹 1. onClick={handleAddItem}
a. This syntax assigns the handleAddItem function directly to
the onClick event.
b. When the button is clicked, the handleAddItem function will
be called without any arguments.

🔹 2. onClick={() => handleAddItem(item)}
a. This syntax uses an arrow function to call handleAddItem
with the item argument

🔹 3. onClick={handleAddItem(item)}
a. This syntax is incorrect and will not work as expected.
b. Button click hone ka intezar nahi karega, turant call ho jayega!

Immer.js Kya Hai? 🛠️
Immer.js ek library hai jo Redux Toolkit ke andar use hoti hai, jo immutable state management ko easy bana deti hai.

🔹 Purane Redux me: State mutate nahi kar sakte the, hamesha copy create karke return karna padta tha.
🔹 Immer.js ke saath: Direct state mutate kar sakte hain, copy aur return karne ki zarurat nahi (Redux internally handle karta hai via Immer.js). Redux automatically copy bana leta hai return kr deta hai.

```js
Example (Redux without Immer.js)

function reducer(state, action) {
  return { ...state, count: state.count + 1 }; // Manual copy
}
------------------------------------------------
Example (Redux Toolkit + Immer.js)

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1; // Directly mutate, but Immer.js makes a copy internally
    },
  },
});
```

- Redux DevTools Chrome Extension 🔥
- Redux DevTools ek Chrome extension hai jo Redux store ko debug karne ke liye use hoti hai. Isse hum Redux state changes ko dekh sakte hain, actions track kar sakte hain aur time-travel debugging bhi kar sakte hain.

- RTK Query - Redux Toolkit ka Advanced Data Fetching Solution 🚀
- RTK Query ek Redux Toolkit ka feature hai jo API calls ko manage karne ke liye use hota hai. Ye data fetching, caching, auto re-fetching aur performance optimization karta hai. 🔥

## References:

- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

Step.1 - Redux Toolkit Install
Step.2 - Store banaya
Step.3 - Provider se store ko root component me wrap kiya
Step.4 - Slice banayi (with reducers)
Step.5 - Store me slice import ki
➡️ Jab kisi component me store ka data chahiye, subscribe karte hain using useSelector()
➡️ Jab kisi component se data change karna ho, wahan dispatch karte hain.

Read data from store -> useSelector() -> Jahan state chahiye
Send action to store -> useDispatch() -> Jahan event trigger ho raha ho (button click, etc.)

User Action (Button Click)
↓
dispatch(addItem(item))
↓
Reducer (in Slice) runs
↓
Redux Store Updated
↓
Component with useSelector() gets new data and re-renders

🧠 Interview Tip Bolne ke liye:
"Redux follows a one-way data flow. We dispatch an action, which is handled by a reducer. The reducer updates the central store, and subscribed components automatically receive the updated state."
