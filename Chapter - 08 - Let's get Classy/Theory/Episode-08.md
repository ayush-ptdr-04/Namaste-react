# restaurant Listing ko change krna hai card[4] se cards[1] krna hai

# class-Based-Component : it is a older way to creating component, it is normal Js class

# (Research) Why do we use super(props) in constructor?

- A: super(props) ka use class components me hota hai jab hum constructor define karte hain. Iska main kaam hota hai parent class (React.Component) ke constructor ko call karna taaki child component this keyword aur props ko access kar sake.
- Jab bhi ek child class (React component) kisi parent class (React.Component) se extend hoti hai, toh child class ka constructor call hone se pehle parent ka constructor execute hona chahiye.
- Isiliye humein super() call karna zaroori hota hai.
- Agar hum super(props) nahi likhenge, toh constructor ke andar this.props undefined rahega.
- Agar hum super() call nahi karenge toh ReferenceError: Must call super constructor in derived class before accessing 'this' aayega.
- super(): Parent constructor call hota hai, lekin this.props undefined hota hai.
- super(props): Parent constructor ke saath props bhi pass hota hai, jisse this.props accessible hota hai.

# In class componet everything is completely diffrent to funtional component = recive-props, state, make-component

# when we update varible using state, so how will work behind the scene, how re-render cycle or lifeCycle of this class-based-component

# how this class-based-component mounted(loaded) or putup On the browser

- when the component is loaded
- 1st is constructor is called and print "parent constructor is called" then
- 2nd is render() is called "parent render is called" and start rendering,
  then React Update the DOM
- 3rd is componentDidMount() is called-now whole component is <succefully-mounted>
  => componentDidMount(setState()) when set-Variable is update is called and <Updating> is start, once again re-render with updated value <is render() and start rendering, then React Update the DOM>
- 4th componentDidUpdate()
- 5th componentWillUnmount()

<!--

* --------MOUNTING LIFE CYCLE--------
* Constructor(Dummy)
* Render(Dummy)
*     <HTML(Dummy data)>
* component Did Mount
*     <API call>
*     <this.setState> state variable is update
*
* --------UPDATING------------
*        Render(API data)
*        <HTML(new API Data)>
*        component Did Update
*
* -----------UNMOUNTING----
*
*
 -->

```js
class UserClass extends React.Component {
  // React.Component is basically class, is given by React
  constructor(props) {
    // this is way to recieve props in class-based-component
    super(props);
    console.log(props);
    console.log("parent constructor is called")

    this.state = {
        count = 0;
        count2 = 1;
    }
  }

  componentDidMount(){
     console.log("parent componentDidMount")
  }

  render() {
    // render() method return some peace of JSX
      console.log("parent render is called")
  const {count, count2} = this.state
    return <div>
    <h1>{this.props.name}</h1>
    <h2>count: {count}</h2>
    <button onClick ={()=>{
        setCount(this.state.count+1)
    }}></button>
    <Abccomponent/>
    <Abccomponent2/>
    </div>;
  }
}
export default UserClass;
```

- <constructor(props) >→ Ye props ko receive karta hai.
- <super(props)> → Ye React ke parent Component class ko props bhejne ke liye zaroori hai.
- <this.props> → Constructor ke andar aur render method me this.props ka use karke hum props ko access kar sakte hain.

<!--
- parent constructor
- parent render

Render-Phase
  - Abccomponent constructor
  - Abccomponent render

  - Abccomponent2 constructor
  - Abccomponent2 render
Ones's Render-Phase batched

Then Commit-phase Happens  <DOM-UPDATED> <HTML>
  - Abccomponent componentDidMount
  - Abccomponent2 componentDidMount
-  Parent componentDidMount
 -->

# React-LifeCycle-Diagram

# useEffect() is first load the component hai and after fetching the API render the component with put the data, react dont wait for return the component

# react is fast bcoz it has two phases: 1st is render_phase and 2nd on is comitt_phase

# componentDidMount() is a React lifecycle method that runs after the component is added to the DOM (webpage).

It runs only once after the first render.
Best place to fetch API data or run any side effects.
Used for setting up subscriptions, timers, or event listeners.

```js
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component is mounted!");
    // Example: Fetch API data here
  }

  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

---

# **React Class-Based Component & Lifecycle Methods**

## **Class-Based Component**

- Class-based components React ke **purane tareeke** hain components banane ke.
- Yeh **JavaScript classes** ka use karte hain jo `React.Component` se extend hoti hain.
- Functional components ke comparison me, class-based components **state aur lifecycle methods** ko support karte hain.

## **Why use `super(props)` in Constructor?**

- `super(props)` ka use **class components me constructor ke andar** hota hai.
- Iska kaam **parent class (`React.Component`) ke constructor ko call karna** hota hai.
- Agar `super(props)` nahi likhenge, toh `this.props` undefined rahega.
- Agar bina `super()` ke constructor likha toh error aayega:  
  **"ReferenceError: Must call super constructor in derived class before accessing 'this'"**

---

## **React Lifecycle Methods (Class-Based Components)**

React ke lifecycle methods teen **phases** me kaam karte hain:

1. **Mounting (Component Load Hona)**
2. **Updating (Component Update Hona)**
3. **Unmounting (Component Delete Hona)**

### **1. Mounting (Component Load Hona)**

Jab component first time load hota hai tab ye lifecycle methods chalte hain:

1. `constructor()` → **Sabse pehle chalta hai**, yahan **state initialize** hoti hai.
2. `render()` → **UI return karta hai**.
3. `componentDidMount()` → **Component DOM me load hone ke baad chalta hai**, yahan **API calls** ya **subscriptions** set kiye ja sakte hain.

#### **Example:**

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

### **2. Updating (Component Update Hona)**

Jab **state ya props change** hoti hain tab ye lifecycle methods chalte hain:

1. `render()` → **UI dobara update hota hai**.
2. `componentDidUpdate()` → **Component update hone ke baad chalta hai**.

#### **Example:**

```js
componentDidUpdate(prevProps, prevState) {
  console.log("Component Did Update");
}
```

### **3. Unmounting (Component Delete Hona)**

Jab component **delete hota hai** ya **DOM se remove hota hai** tab ye lifecycle method chalta hai:

- `componentWillUnmount()` → **Cleanup ke liye use hota hai** jaise ki **event listeners, timers, API requests ko cancel karna**.

#### **Example:**

```js
componentWillUnmount() {
  console.log("Component Will Unmount");
}
```

---

## **React Lifecycle Flow (Execution Order)**

Agar ek component mount hota hai, update hota hai, aur fir delete hota hai, toh execution flow ye hoga:

### **(1) Mounting Phase**

```
1. constructor()
2. render()
3. componentDidMount()
```

### **(2) Updating Phase (Jab State/Props Change Hoti Hai)**

```
4. render()
5. componentDidUpdate()
```

### **(3) Unmounting Phase (Jab Component Delete Hota Hai)**

```
6. componentWillUnmount()
```

---

## **React Lifecycle Diagram**

React ke lifecycle ka flow kuch aisa hota hai:

```
---- MOUNTING ----
| constructor() |
| render() |
| componentDidMount() |
----------------------
      ↓
---- UPDATING ----
| render() |
| componentDidUpdate() |
----------------------
      ↓
---- UNMOUNTING ----
| componentWillUnmount() |
----------------------
```

---

## **React Fast Kaise Hai?**

React do phases me kaam karta hai:

1. **Render Phase** → Component ka UI render hota hai (virtual DOM me update hota hai)
2. **Commit Phase** → Actual DOM me changes apply hote hain (fast performance ke liye)

---

## **Functional Component vs Class Component**

| Feature           | Class Component            | Functional Component |
| ----------------- | -------------------------- | -------------------- |
| State             | `this.state`               | `useState()` Hook    |
| Lifecycle Methods | `componentDidMount()` etc. | `useEffect()` Hook   |
| Syntax            | JavaScript Class           | Simple Function      |
| Performance       | Thoda slow                 | Fast                 |

---

## **`useEffect()` vs `componentDidMount()`**

- `componentDidMount()` → **Class components** ke liye hota hai.
- `useEffect(() => {}, [])` → **Functional components** me `componentDidMount()` ka replacement hai.

#### **Example:**

```js
useEffect(() => {
  console.log("Component Mounted!");
  return () => {
    console.log("Component Will Unmount!");
  };
}, []);
```

---

## **Summary (Class-Based Lifecycle Methods)**

| Lifecycle Method         | Purpose                                                             |
| ------------------------ | ------------------------------------------------------------------- |
| `constructor()`          | Initialize state & props                                            |
| `render()`               | UI return karta hai                                                 |
| `componentDidMount()`    | Component mount hone ke baad API call ya side effects karne ke liye |
| `componentDidUpdate()`   | Jab bhi state ya props update ho                                    |
| `componentWillUnmount()` | Cleanup (event listeners remove, timers clear)                      |

---

### **Conclusion**

- Class components me lifecycle methods kaafi zaroori hote hain for **handling side-effects, API calls aur UI updates**.
- Functional components me `useEffect()` lifecycle methods ka replacement hai.
- React **fast performance** ke liye **render phase aur commit phase** use karta hai.

Yeh improved notes ab aur zyada clear aur structured hain! 🚀
