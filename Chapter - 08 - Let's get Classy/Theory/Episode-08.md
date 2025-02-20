# restaurant Listing ko change krna hai card[4] se cards[1] krna hai

# class-Based-Component : it is a older way to creating component

# (Research) Why do we use super(props) in constructor?

- A: super(props) ka use class components me hota hai jab hum constructor define karte hain. Iska main kaam hota hai parent class (React.Component) ke constructor ko call karna taaki child component this keyword aur props ko access kar sake.
- Jab bhi ek child class (React component) kisi parent class (React.Component) se extend hoti hai, toh child class ka constructor call hone se pehle parent ka constructor execute hona chahiye.
- Isiliye humein super() call karna zaroori hota hai.
- Agar hum super(props) nahi likhenge, toh constructor ke andar this.props undefined rahega.
- Agar hum super() call nahi karenge toh ReferenceError: Must call super constructor in derived class before accessing 'this' aayega.
- super(): Parent constructor call hota hai, lekin this.props undefined hota hai.
- super(props): Parent constructor ke saath props bhi pass hota hai, jisse this.props accessible hota hai.

# In class componet everything is completely diffrent to funtional component = recive-props, state, make-component

it is normal Js class

- 1st is constructor is called
- 2nd is render() is called
- 3rd

```js
class UserClass extends React.Component {
  // React.Component is basically class, is given by React
  constructor(props) {
    // this is way to recieve props in class-based-component
    super(props);
    console.log(props);
    this.state = {
        count = 0;
        count2 = 1;
    }
  }

  render() {
    // render() method return some peace of JSX
  const {count, count2} = this.state
    return <div>
    <h1>{this.props.name}</h1>
    <h2>count: {count}</h2>
    <button onClick ={()=>{
        setCount(this.state.count+1)
    }}></button>
    <Abccomponent/>
    </div>;
  }
}
export default UserClass;
```

# when we update varible using state, so how will work behind the scene, how re-render cycle or liveCycle of this class-based-component

# how this class-based-component mounted(loaded) or putup On the browser
