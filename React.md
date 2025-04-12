- npm init
- npm i -D parcel
- npm i react
- npm i react-dom
- npx parcel index.html
- Add in package.json:- "browserslist": [
  "last 2 version"
  ]
- "scripts": {
  "start": "parcel index.html" // start index.html ko access kr rha hai
  "build": "parcel build index.html",
  "test": "jest"
  },
- npm i react-router-dom (for routing)
  React dev tool and cors origin and REduxDev tools is chrom extensions
- tailwindincelence and vs-code-icons is a vs extantion

# Redux-ToolKit

- install @reduxjs/toolkit and react-redux
- Build Our store
- connnect our store to app
- Slice(cart Slice) crete
- dispatch action
- Selector

# setting Up Testing

- install React-testing-liabrary
- install JEST
- install Babel dependcies
- configure babel
- configure Parcel configure file to disable default babel transpilation
- JEST configuration
- install jest-environment jsdom librarie
- Install @babel/preset-react

---------done------------

Bhai pehli baat – **hat's off to your effort 👏🔥**  
Tu bilkul genuine try kar raha hai, and mujhe lag raha hai bas thoda sa polish chahiye tere answers me. Tera concept clear ho raha hai, bas thoda **interview-level words + structure** laa de, and tu easily interview nikaal dega!

Chal ab main **har answer ka quick review + better version** de raha hoon. Tu revise karega toh full confident feel karega next baar.

---

### 🟢 **1. What is React? How is it different from Vanilla JS?**

✅ **Tera Answer Summary**:

- React is a JS library
- Uses Virtual DOM to update UI faster
- Vanilla JS difference clear nahi

💡 **Polished Answer**:

> React is a JavaScript library for building user interfaces using a component-based architecture. Unlike Vanilla JS, React uses a virtual DOM, which helps in efficient rendering. In Vanilla JS, you directly manipulate the DOM, which can be slow and complex as your app grows.

---

### 🟡 **2. What is JSX? Can a component return multiple elements without a parent?**

✅ **Tera Answer Summary**:

- JSX = JavaScript + XML
- Returns only one parent element

💡 **Polished Answer**:

> JSX allows us to write HTML-like code inside JavaScript. It makes the UI code cleaner and easier to understand. In React, components must return one parent element, but we can use `<React.Fragment>` or empty tags `<> </>` to wrap multiple elements without adding extra nodes.

---

### 🟠 **3. What is Virtual DOM?**

✅ **Tera Answer Summary**:

- Copy of real DOM
- Lightweight

💡 **Polished Answer**:

> Virtual DOM is an in-memory lightweight copy of the real DOM. When a component updates, React creates a new Virtual DOM, compares it with the previous one (diffing), and only updates the changed parts in the real DOM – this makes React fast.

---

### 🔵 **4. Functional vs Class Components**

✅ **Tera Answer Summary**:

- Function is newer, easier, used more

💡 **Polished Answer**:

> Class components use ES6 classes and have lifecycle methods, whereas functional components are plain JS functions and use Hooks (`useState`, `useEffect`) for state and lifecycle management. Nowadays, functional components are preferred due to simplicity and better performance.

---

### 🟣 **5. useState vs useEffect**

✅ **Tera Answer Summary**:

- `useState` for local state
- `useEffect` for API

💡 **Polished Answer**:

> `useState` is used to manage local state in a functional component.  
> `useEffect` is used for side-effects like fetching data from APIs, updating the DOM, setting timers, etc. It runs after the component renders.

---

### 🟤 **6. React.createElement()**

✅ **Tera Answer**:

- Only surface idea

💡 **Polished Answer**:

> `React.createElement()` is a core function of React which creates a React element. JSX code is transpiled to `React.createElement()` behind the scenes. For example:

```jsx
<h1>Hello</h1>;
// becomes
React.createElement("h1", null, "Hello");
```

---

### ⚫ **7. What is React Fiber?**

✅ **Tera Answer**:

- Bhool gaya 😅

💡 **Polished Answer**:

> React Fiber is the new architecture of React which improves rendering performance and supports features like **concurrent mode**, **interruptible rendering**, and **prioritization** of updates.

---

### 🟠 **8. What is Lifting State Up?**

✅ **Tera Answer Summary**:

- Move state from child to parent

💡 **Polished Answer**:

> When two or more components need to share the same state, we move the state to their common parent and pass it via props. This is called **lifting state up** – it helps in keeping state management clean and centralized.

---

### 🔵 **9. Controlled vs Uncontrolled Components**

✅ **Tera Answer**:

- Controlled = controlled by other comp
- Uncontrolled = local

💡 **Polished Answer**:

> A controlled component is controlled by React state. Its input values are updated using `useState`.  
> An uncontrolled component uses `ref` and its data is handled by the DOM itself, not React.

---

### 🔥 **10. Update Parent State from Child**

✅ **Tera Answer**:

- Use Context API

💡 **Polished Answer**:

> You can pass a callback function from the parent to the child via props. The child calls that function to update the parent's state.

```js
// Parent
const Parent = () => {
  const [count, setCount] = useState(0);
  return <Child onClick={() => setCount(count + 1)} />;
};

// Child
const Child = ({ onClick }) => <button onClick={onClick}>Increment</button>;
```

✅ Context API is used when you need global state or to avoid prop drilling (passing through multiple components).

---

### 💬 Final Verdict:

Tu 90% ready hai bhai! 🔥  
Bas thoda wording improve kar le, real-world example yaad kar le – **tera confidence skyrocket karega!**

Agar tu chaahe toh main ek aur **mock round with Swiggy-project-based questions** bhi le sakta hoon. Bol de!
