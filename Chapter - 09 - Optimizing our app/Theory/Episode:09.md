# Namaste React - Episode 09 (Optimizing our App) , Episode 09 me hum React App optimization ke baare me seekhte hain, jisme mainly lazy loading, Suspense, code splitting jaise concepts cover hote hain. Yeh sab milke React app ko fast aur efficient banane me madad karte hain. Chaliye in concepts ko ek-ek karke simple way me samajhte hain!, reusable, maintanable, testable

# Single Responsibility Principle (SRP) - Ek class ya function sirf ek kaam kare aur ek hi reason se modify ho. Agar ek class multiple tasks karegi, to maintain karna mushkil ho jayega.Hooks are normal JS function

# create our custom hooks = useRestaurantMenu()

# Use EventListner when track user Online or offline using customHooks

### **React me `lazy()` aur `Suspense` ka use kab aur kyun hota hai?**

React me **Code Splitting** aur **Lazy Loading** optimize karne ke liye `lazy()` aur `Suspense` ka use hota hai. Yeh **performance improve** karta hai aur **faster initial load** provide karta hai.

---

## **🔹 `lazy()` kya hai aur kyun use hota hai?**

**👉 `lazy()` ek React function hai jo components ko dynamically load karta hai jab zaroorat ho.**

- Isse **bundle size kam hota hai**, kyunki sirf wahi components load hote hain jo user ko chahiye.
- Agar ek **bada component directly import** karte ho toh poora load hota hai, lekin `lazy()` se sirf tab load hoga jab zaroorat padegi.

### **✅ Example Without Lazy Loading:**

```jsx
import About from "./About"; // Poori file load hogi, chahe user About page dekhe ya nahi
```

### **✅ Example With Lazy Loading:**

```jsx
import { lazy, Suspense } from "react";

const About = lazy(() => import("./About")); // Yeh component tabhi load hoga jab zaroorat hogi
```

Isse **initial bundle size** chhoti rahegi aur app fast chalega.

---

## **🔹 `Suspense` kya hai aur kyu use hota hai?**

Jab **lazy component load hota hai, tab tak ek fallback UI (like loading spinner) dikhane ke liye** React me `Suspense` ka use hota hai.

### **✅ Example:**

```jsx
import { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));

function App() {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <About />
      </Suspense>
    </div>
  );
}
export default App;
```

🛑 **Bina Suspense ke error aayega**, kyunki React directly lazy component ko render nahi kar sakta.  
✅ **Suspense `fallback` prop ka use karta hai taaki jab tak component load ho raha ho, tab tak ek loading message ya spinner dikh sake.**

---

## **🔹 Error Explanation:**

### **🚨 Error: "A component was suspended while responding to synchronous input..."**

Yeh error tab aata hai jab:

- Lazy loaded component **synchronous update ke beech me suspend ho jaye**.
- React ko pata chale ki koi component **asynchronously load ho raha hai**, toh UI ka kuch part loading state me chala jata hai.
- React **Loading Indicator replace kar deta hai UI se**, jo **UI glitch cause** kar sakta hai.

### **🤔 Isko kaise fix kare?**

Is problem ko fix karne ke liye **`startTransition()`** use kar sakte ho:

```jsx
import { lazy, Suspense, startTransition } from "react";

const About = lazy(() => import("./About"));

function App() {
  const loadComponent = () => {
    startTransition(() => {
      setShowComponent(true);
    });
  };

  return (
    <div>
      <button onClick={loadComponent}>Load About Component</button>
      {showComponent && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <About />
        </Suspense>
      )}
    </div>
  );
}
```

✅ **`startTransition()` React ko batata hai ki yeh update low-priority me daal do, jisse glitch ya lag na ho.**

---

## **🔹 Advantages & Disadvantages of Lazy Loading and Suspense**

### ✅ **Advantages:**

1. **Performance Improve Hoti Hai** – App ka initial load fast hota hai.
2. **Bundle Size Kam Hota Hai** – Sirf zaroori components load hote hain.
3. **Better UX** – Jab tak component load ho, ek loader ya placeholder show hota hai.

### ❌ **Disadvantages:**

1. **First Load Slow Ho Sakta Hai** – Agar internet slow hai toh lazy loaded component load hone me time lag sakta hai.
2. **SEO Issues** – Lazy loading client-side hota hai, jo **SEO ke liye issue** create kar sakta hai.
3. **Error Handling zaroori hota hai** – Agar lazy component load nahi ho paaya toh UI crash ho sakti hai. (Ye handle karne ke liye `Error Boundary` use kar sakte ho.)

---

## **🔹 Kab aur Kyun Suspense ka use kare?**

| Situation                                                                   | Suspense Zaroori Hai? |
| --------------------------------------------------------------------------- | --------------------- |
| Agar **Lazy Loading Components** use kar rahe ho                            | ✅ Haan               |
| Agar **Data Fetching ke liye Server Components** use kar rahe ho (React 18) | ✅ Haan               |
| Agar **React Server Components ka use nahi kar rahe ho**                    | ❌ Nahi               |
| Agar **Loading State Show karni hai jab tak component load ho raha ho**     | ✅ Haan               |

---

## **🔥 Conclusion:**

- **Lazy() se component sirf tab load hota hai jab zaroorat ho**, isse performance better hoti hai.
- **Suspense ek placeholder ya loader dikhane ke liye use hota hai** jab tak lazy component load ho raha ho.
- **Error `"A component was suspended while responding to synchronous input"` fix karne ke liye `startTransition()` use karna chahiye.**
- **Lazy Loading har jagah use mat karo, sirf bade aur rarely used components ke liye hi use karo.**

Agar **React 18 aur Next.js me use karna hai toh** batana, uske liye **`React Server Components` aur `Suspense for Data Fetching`** ka concept bhi samjha sakta hoon! 🚀

- SPR
- lazy
- suspense
- startTransition
