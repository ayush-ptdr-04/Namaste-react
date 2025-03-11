# **React Class-Based Components & Lifecycle Methods**

## **1. Class-Based Components**

- Class-based components React ke **purane tareeke** hain components banane ke.
- Yeh **JavaScript classes** ka use karte hain jo `React.Component` se extend hoti hain.
- Functional components ke comparison me, class-based components **state aur lifecycle methods** ko support karte hain.

---

## **2. Why use `super(props)` in Constructor?**

- `super(props)` ka use **class components me constructor ke andar** hota hai.
- Iska kaam **parent class (`React.Component`) ke constructor ko call karna** hota hai.
- Agar `super(props)` nahi likhenge, toh `this.props` undefined rahega.
- Agar bina `super()` ke constructor likha toh error aayega:  
  **"ReferenceError: Must call super constructor in derived class before accessing 'this'"**

---

## **3. React Lifecycle Methods (Class-Based Components)**

React ke lifecycle methods teen **phases** me kaam karte hain:

### **A. Mounting (Component Load Hona)**

Jab component first time load hota hai tab ye lifecycle methods chalte hain:

1. `constructor()` → **Sabse pehle chalta hai**, yahan **state initialize** hoti hai.
2. `render()` → **UI return karta hai**.
3. `componentDidMount()` → **Component DOM me load hone ke baad chalta hai**, yahan **API calls** ya **state** set kiye ja sakte hain.

#### **Example: Mounting Phase**

```js
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor Called");
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render Called");
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase Count
        </button>
      </div>
    );
  }
}
export default UserClass;
```

---

### **B. Updating (Component Update Hona)**

Jab **state ya props change** hoti hain tab ye lifecycle methods chalte hain:

1. `re-render()` → **UI dobara update hota hai**.
2. `componentDidUpdate()` → **Component update hone ke baad chalta hai**.

#### **Example: Updating Phase**

```js
componentDidUpdate(prevProps, prevState) {
  console.log("Component Did Update");
}
```

---

### **C. Unmounting (Component Delete Hona)**

Jab component **delete hota hai** ya **DOM se remove hota hai** tab ye lifecycle method chalta hai:

- `componentWillUnmount()` → **Cleanup ke liye use hota hai** jaise ki **event listeners, timers, API requests ko cancel karna**.

#### **Example: Unmounting Phase**

```js
componentWillUnmount() {
  console.log("Component Will Unmount");
}
```

---

## **4. React Lifecycle Flow (Execution Order)**

Agar ek component mount hota hai, update hota hai, aur fir delete hota hai, toh execution flow ye hoga:

### **(A) Mounting Phase**

```
1. constructor()
2. render()
3. componentDidMount()
```

### **(B) Updating Phase (Jab State/Props Change Hoti Hai)**

```
4. render()
5. componentDidUpdate()
```

### **(C) Unmounting Phase**

```
6. componentWillUnmount()
```

---

## **5. React Fast Kyu Hai?**

- React ke do phases hote hain:
  1. **Render Phase** → Yeh virtual DOM create karta hai.
  2. **Commit Phase** → Yeh actual DOM update karta hai.
- React ek **SPA (Single Page Application)** hai, jo sirf components update karta hai, pura page reload nahi karta.

---

## **6. React Functional vs Class Components**

| Feature           | Class-Based Component                         | Functional Component           |
| ----------------- | --------------------------------------------- | ------------------------------ |
| Syntax            | `class` use hoti hai                          | `function` use hoti hai        |
| State             | `this.state` use hota hai                     | `useState()` hook use hota hai |
| Lifecycle Methods | `componentDidMount()`, `componentDidUpdate()` | `useEffect()`                  |
| Performance       | Thoda slow hota hai                           | Fast hota hai                  |
| Hooks             | Hooks nahi hote                               | Hooks use hote hain            |

---

## **7. React useEffect() vs componentDidMount()**

- `componentDidMount()` sirf class-based components me hota hai aur **component ke mount hone ke baad chalta hai**.
- `useEffect()` functional components me hota hai aur **component render hone ke baad chalta hai**.

#### **Example: `useEffect()` (Functional Component)**

```js
import { useEffect } from "react";
function MyComponent() {
  useEffect(() => {
    console.log("Component is Mounted!");
  }, []); // Empty dependency array means it runs only once
  return <h1>Hello, World!</h1>;
}
export default MyComponent;
```

---

## **8. React Lifecycle Diagram**

- **Mounting:** `constructor()` → `render()` → `componentDidMount()`
- **Updating:** `render()` → `componentDidUpdate()`
- **Unmounting:** `componentWillUnmount()`

---
