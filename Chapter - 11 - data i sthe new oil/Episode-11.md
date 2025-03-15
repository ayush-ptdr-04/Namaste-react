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
