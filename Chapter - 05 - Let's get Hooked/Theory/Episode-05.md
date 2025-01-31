- src folder create karte hain taaki project ke source code ko organize aur manage karna easy ho, aur saare components, logic, aur assets ek structured way me rakhe jaa sakein.

- React doesn't have opinion on how you put files into folders
- .js or .jsx is same file

# Named export, Default export, and \* as export

- A: ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: named export and default export. In Named export, one can have multiple named exports per file. Then import the specific exports they want surrounded in {} braces. The name of imported module has to be the same as the name of the exported module

=> In Named export, the component is exported from MyComponent.js file like:
export const MyComponent = () => {}
export const MyComponent2 = () => {}

- component is imported from MyComponent.js file like: here we must use {} in MyComponent.
  import { MyComponent } from "./MyComponent";
  import { MyComponent, MyComponent2 } from "./MyComponent";

// giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";

=> Default export, One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like. In Default export, the component is exported from MyComponent.js file like:

const MyComponent = () => {}
export default MyComponent;

- the component is imported from MyComponent.js file like: here we must omit(don't use) {} in MyComponent.
  import MyComponent from "./MyComponent";

<!--  using for making dynamicn app -->

# state: components ka internal data jo components ke behavior ko control krta hai, isse hum data ko track krte hai aur jab state update hoti hai toh UI automatically re-render hota hai

🔹 State ek special variable hai jo React ke component me data store karta hai.
🔹 Agar state change hoti hai to UI automatically update ho jati hai.
🔹 React Virtual DOM ka use karke sirf badle hue part ko update karta hai.
🔹 State asynchronous hoti hai, yani turant update nahi hoti, balki React decide karta hai kab update kare.

# React Hooks: Hooks React ke andar simple JavaScript functions hote hain jo stateful logic ko handle karte hain.

- whenever a state variable update , react will re-renders the component

- State ka kaam hai page ke data ko store karna. Jab bhi state me koi update hoti hai, React automatically page ko re-render karta hai, taaki updated data ya UI user ko dikh sake.
- Aur Hooks ka kaam hai un updates ko track karna aur React ko batana ki kis data ko update karna hai. Jaise useState se hum state ko manage karte hain aur useEffect se hum side effects ko handle karte hain (jaise data fetch karna, timer set karna, etc.).

- Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

- React Hooks ek naya feature hai jo React v16.8 me introduce hua. Hooks ka use functional components ke andar state aur lifecycle methods ko manage karne ke liye kiya jata hai. Yeh functional components ko class components ki power dete hain.

=> useState: State manage karne ke liye.:- useState hook is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

import React, { useState } from "react";
const [count, setCount] = useState(0);
count: is current(initial) value of the state
setCount: is update the count setCount(...)
useState(0): initial value (useSatate return exact two values current state and update a diffrent valu(setState))

# Actual DOM: Browser ka original Document Object Model (DOM) jo HTML structure ko represent karta hai.

- Browser me exist karta hai
- Pura DOM re-render hota hai
- Slow in large apps
- Pure JavaScript/HTML applications

# Virtual DOM: React ek copy of Actual DOM banata hai jo memory me hota hai, jise Virtual DOM kehte hain.

- Memory me exist karta hai
- Sirf changed parts update hote hain
- Fast and efficient
- React applications

# Reconciliation in React

- Reconciliation ek process hai jisme React Browser DOM ko efficiently update karta hai, jisse React fast kaam karta hai.
- React ek copy of Browser DOM banata hai, jise Virtual DOM kehte hain.
- Jab aap component ko update karte ho (data change ya re-render hota hai):- React ek naya Virtual DOM banata hai, Us nayi Virtual DOM ko purani Virtual DOM se compare karta hai using a Diffing Algorithm.
- React bas unhi nodes ko Real DOM me update karta hai jo change hui hain. Baaki DOM ko untouched chhoda jata hai.

# React Fiber

- React Fiber ek nayi architecture hai jo React 16 se introduce hui, jisse React apps faster, smoother, aur smarter ban jati hain. Yeh React ka reconciliation algorithm ka rewrite hai, jo asynchronous way me kaam karta hai.
- React ab tasks ko pause, resume, aur restart kar sakta hai, jab naye updates aayein.
- React tasks ko priority ke hisaab se divide karta hai, jisme important kaam pehle kiya jata hai.
- Pichla completed work dobara use kar sakta hai, aur unnecessary work ko abort kar sakta hai.
- React tasks ko chhote chunks me todta hai, jo efficiently handle kiye jate hain.

# react is faster how:- React is doing efficient DOM manipulation, beacuse it has a virtual DOM , react fiber(new Reconciliation algorithm) find diffrence b/w two virtualDOM and updated the only changed portion

# How React Works Behind the Scenes

React ke peeche ka pura magic uska Virtual DOM, Reconciliation process, aur components-based architecture hai. Ye process ensure karta hai ki React fast aur efficient tarike se UI render kare aur updates handle kare.

- React me UI ko chhote-chhote reusable components me tod diya jata hai, Har component apne state aur props ke basis par kaam karta hai.
- React ek Virtual DOM banata hai jo browser ke Actual DOM ka ek lightweight copy hota hai, Virtual DOM memory me hota hai, isliye changes fast process hote hain.
- Jab app load hoti hai, React Virtual DOM ke basis par pehli baar Actual DOM ko render karta hai.
  Real DOM browser me dikhayi deta hai.
- Jab state ya props change hoti hain, React:
  Ek nayi Virtual DOM banata hai.
  Purani Virtual DOM se compare karta hai using Diffing Algorithm.
  Sirf jo parts change hue hain unhe Actual DOM me update karta hai.
- Reconciliation Process:
  React ka Diffing Algorithm purane aur naye Virtual DOM ko compare karta hai.
  Sirf changed nodes ko update karke React fast aur efficient banata hai.
- React ka data flow parent to child hota hai (props ke through), State aur props ke saath component re-renders hote hain jab data change hota hai.
- React ke peeche ka engine Fiber hai, jo tasks ko priority ke basis par handle karta hai, Yeh complex UIs ko smoothly render karne me madad karta hai.
