# Higher Order Component

- HOC is a function that takes Component as a input and return a component as a output
- HOC is a pure function because they do not change the existing behavior of the input component
  Higher-Order Component (HOC) ek **function hai jo ek component leta hai aur ek naya component return karta hai.** Yeh mainly **code reuse aur component logic ko wrap** karne ke liye use hota hai.
- **HOC ka use readability, reusability aur scalability improve karta hai.** 🚀

---

## **👀 HOC in Your Code (withPromotedLabel)**

Tumhare code me `withPromotedLabel` ek **Higher-Order Component (HOC)** hai jo **promoted restaurants ke liye ek label add karta hai.**

👇 Yeh function **ek component (`RestaurantCard`) leta hai aur ek naya component return karta hai jo "Promoted" label add karta hai.**

### **📌 Step-by-Step Working**

```js
// 👇 HOC function jo ek component leta hai (RestaurantCard)
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        {/* Yeh "Promoted" label add karega */}
        <label className="absolute m-2 p-2 bg-black text-white rounded-lg">
          Promoted
        </label>
        {/* 👇 Original RestaurantCard yahan render hoga */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};
```

✅ Yeh **original `RestaurantCard` ko modify nahi karta**, bas uske **upar ek label add karta hai.**  
✅ **Code Reusability:** Har promoted restaurant me **alagr se label add karne ki zarurat nahi padti.**  
✅ **Reusability & Readability:** Agar aur bhi modifications karne ho, toh HOC me easily modify kar sakte ho.

---

## **🚀 HOC Kaise Apply Ho Raha Hai?**

👇 Tumhare `Body.js` file me yeh apply ho raha hai:

```js
// 👇 HOC ke saath RestaurantCard ka ek naya version create ho raha hai
const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
```

- Jab RestaurantCardPromoted call hota hai:
  <RestaurantCardPromoted resData={restaurant} />
- Yeh withPromotedLabel ke andar chala jata hai.
- withPromotedLabel kya karta hai? Ek wrapper component return karta hai jo "Promoted" label ke saath original RestaurantCard ko wrap kar deta hai.

Aur jab restaurant promoted hoga toh **yeh component use hoga:**

```js
{
  restaurant.info.isNewlyOnboarded ? (
    <RestaurantCardPromoted resData={restaurant} />
  ) : (
    <RestaurantCard resData={restaurant} />
  );
}
```

✅ **Agar restaurant promoted hai** (`isNewlyOnboarded === true`), toh **`RestaurantCardPromoted` use hoga.**  
✅ **Agar normal restaurant hai, toh simple `RestaurantCard` render hoga.**

---

## **🎯 Example of Output**

Agar ek restaurant promoted hai, toh **"Promoted" label ke saath dikhega:**

```
-----------------------------------
| Promoted                        |
-----------------------------------
| 🍕 Domino's Pizza               |
| 🍔 Cuisines: Pizza, Fast Food   |
| ⭐ 4.5                           |
| 💰 ₹400 for Two                 |
| ⏳ 30 min                        |
-----------------------------------
```

Agar restaurant **promoted nahi hai**, toh **bina label ke dikhega.**

---

## **🔥 Why Use HOC?**

✔️ **Code Reusability** – Ek hi baar likhne ke baad kahi bhi use kar sakte ho.  
✔️ **Separation of Concerns** – `RestaurantCard` ka logic alag hai aur `Promoted Label` ka logic HOC handle kar raha hai.  
✔️ **Scalability** – Agar aur bhi labels ya features add karne ho toh sirf HOC me modify karna hoga, alag-alag components me nahi.

# Un-Controlled Component

- if any component managing it's own state and controlling the behavior on its own then component known as un-controlled component
- the parent component have no power or control over this component and hence it will be known as un-conrolled

```js
import React, { useState } from "react";

const ItemCard = () => {

  const [showItems, setShowItems] = useState(false)

   const handleClick = () => {
     setShowItems(!showItems); // agar showItems true hai to false or false hai to true
  };
  return(
    <div>
    <button onClick={(handelClick)}>Click</button>
         {showItems?<h1>Hello</h1>}
    </div>
  )
}
const ItemCardList () => {
  return(
    <div>
    <ItemCard/>
    </div>
  )
}
export default ItemCardList
// in the above example the <ItemCard/> is child component of the <ItemCardList/>
```

- The <ItemCard /> component has a state variable i.e. showHeading which has a default value false. This value gets changed when the button is clicked by the user.
- If the showHeading is true then the Hello message will be shown, if it is false then the message will be hidden.
- Now this component manages its own state and behavior and it does not depend on its parent component. Hence it is

# Controlled Component

- if the state and behaivor of component is being manged by its parent component , then it is referrd to as a controlled component

```js
import React, { useState } from "react";

const ItemCard = (props) => {
  return (
    <div>
      <button onClick={handelClick}>click</button>
      {props.showHeading ? <h1> hello</h1> : null}
    </div>
  );
};

const ItemCardList = () => {
  return (
    <div>
      <itemCard showHeading={true} />
    </div>
  );
};

export default <ItemCardList />;
```

- in the above ex. the <itemCard/> doesn't have any state variable to manage
- Instead, the value of showHeading is being sent from the parent component <ItemCardList /> and is being received by the <ItemCard /> component via props.
- Since the <ItemCardList /> component is now controlling the <ItemCard /> component, the <ItemCard /> is now referred to as the Controlled Component.

# Lifting the state up: Kabhi-kabhi hume do ya zyada components ke beech ek common state share karni padti hai. Agar ek component ka state dusre component me bhi chahiye, toh state ko upar wale parent component me shift kar diya jata hai. Isko hi "Lifting the State Up" kehte hain.

```js
// ItemCard component ke pass apna khud ka state nahi hai.
// Parent component ItemCardList ko pata hi nahi chalega ki user ne ItemCard ke andar button click kiya ya nahi.
// Solution: Parent component (ItemCardList) ko user ke interaction ke baare me batana hoga.

import React, { useState } from "react";

const ItemCard = ({ onShow, showHeading }) => {
  return (
    <div>
      <button onClick={onShow}>click</button>
      {showHeading ? <h1> hello</h1> : null}
    </div>
  );
};

const ItemCardList = () => {
  const [showHeading, setShowHeading] = useState(false);
  return (
    <div>
      <itemCard
        onShow={() => setShowHeading(!showHeading)}
        showHeading={showHeading}
      />
    </div>
  );
};

export default <ItemCardList />;
```

- Lifting the State Up ka matlab hai state ko child component se hata kar parent component me rakhna, taki parent child ke state ko control kar sake aur components ke beech proper communication ho.
  1️⃣ showHeading ka state ItemCardList me hai.
  2️⃣ ItemCard ko onShow function diya, jo showHeading ko toggle karega.
  3️⃣ Jab button click hota hai, toh parent ka state update hota hai aur re-render hota hai.
  4️⃣ Agar showHeading true hai toh <h2>Heading is Visible</h2> show hoga.

- Agar parent ko child ke state ka control chahiye, toh state ko parent me rakho aur function pass karke state update karo!

# Props-Drilling: Props Drilling ka matlab hai jab ek component ko data (props) kisi dusre component tak pahunchane ke liye beech ke multiple components se pass karna padta hai, chahe unhe us data ki zaroorat ho ya na ho. tab hume isse avoid krna hai or react-context ka use krna hai

# react-context:

# in class-based-component we dont use hooks

# Create and provide the context
