# Monolith architecture ek traditional software development model hai jisme pura software ek single unit me bana hota hai. Isme sab services (jaise database, server, aur UI) ek hi application file ke andar hoti hain.

- Agar kuch changes karne ho, toh puri application ko update aur redeploy karna padta hai.............

# Microservices ek software development ka approach hai jisme hum apne software ko chhote-chhote independent services me tod dete hain. Yeh har service apna kaam alag-alag karti hai aur ek doosre ke saath APIs (Application Programming Interfaces) ke through communicate karti hai.

- Pura software ek bade system ke bajay chhote modules me divide hota hai, jisme har ek ka apna specific kaam hota hai.
- Example: Ek service sirf database handle karegi, doosri service sirf UI ke liye hogi.
- Har service independently kaam kar sakti hai aur apne aap deploy ho sakti hai.
- Agar ek service fail ho jaye, toh puri application band nahi hoti. Sirf woh service fix karni padti hai.
- Yeh architecture system ko fast, scalable, aur flexible banata hai.
- Easy maintenance aur deployment ki wajah se industry me kaafi popular hai.

# Comparison with Microservices

=> Monolith Architecture: Sab kuch ek jagah pe hota hai (single codebase), all processes are tightly coupled and run as a single service.
Example: Pura restaurant ka kitchen ek hi stove par kaam kare.

=> Microservices Architecture: Software ko chhote-chhote parts me tod dete hain, an application is built as independent components that run each application process as a service..
Example: Kitchen ka alag-alag kaam (jaise cutting, cooking, cleaning) alag-alag team karti hai.

# tow approaches : how WebApp or UIApplication fetch the data from backend

- when our API call

1. - AppLoads -> make an API call(data fectched in 1-second) -> render(after 1-second)
2. - Loads -> render(UI) -> Api(fetched data) -> re-render(fetched-data)
     In React we will always be using 2nd approach

# useEffect ek JavaScript function hai jo React provide karta hai. Yeh hook components ke andar side effects handle karne ke liye use hota hai.

- Side effects wo operations hote hain jo component ke bahar ya bahar ki states pe depend karte hain, jaise:
- API data fetch karna, DOM ko directly update karna, Timers ya subscriptions setup karna
- first body will be renderd then useEffect called

# Allow cors extention in the browser search(cors extentiion and add to chrom )

# CORS (Cross-Origin Resource Sharing):-

- CORS (Cross-Origin Resource Sharing) ek security feature hai jo browsers me hota hai. Ye kisi website (origin) ko doosri website se direct data fetch karne se rokta hai agar proper permissions na ho.

- Agar aapko CORS error aa raha hai jab aap Swiggy ya kisi aur API se data fetch karne ki koshish kar rahe hain, toh aap CORS Extension ka use kar sakte hain.

- CORS ek HTTP header-based mechanism hai jo browser aur server ke beech cross-origin requests ko manage karta hai. Iska main purpose hai ki ek server ko yeh bataya ja sake ki konsi origin (domain, port, ya scheme) se resources ko load karna allowed hai.
- CORS extension ek third-party extension hai jo Chrome Web Store se install hoti hai. Ye browser ke CORS policy ko temporarily bypass karne ke liye use hoti hai, taaki aap doosre origins (domains) se data fetch kar sakein.

# api me problem aiee thi to mene iss API ka use kiya: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999" , or cors extension ko allow kiya fir json data ko expand krke restaurant key tak pahucha: jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants , cors hume block kr deta hai jyada API request bhejne pr after 24 hour re-start kr deta hai

=> use https://corsproxy.io/? + URL : iss URL se hum 50 to 60 request kr sakte hai cors extention ko off krna pahle

- pahle dekhna hai ki API se data fetch ho pa rha hai ki nahi
- agar nahi to kaha pr error aa rahi hai usse pade fir usse solve kare
- ek comman Error cors ki hi aati hai to uske liye cors extantion chrome me use krna hoga

```js
const fetchData = async () => {
  // ✅ Correct way
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999"
  );
  const json = await data.json();
  console.log(
    json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  );
};
```

# Optional Chaining (?.) ek JavaScript feature hai jo undefined ya null values ko handle karne me madad karta hai bina error diye. Agar kisi object ya nested property me value na mile, toh error throw hone ke bajay undefined return hota hai.

✅ Error-Free Execution: Agar property exist nahi karti, toh undefined return hota hai error nahi.
✅ Less Code: if conditions likhne ki zaroorat nahi padti.
✅ Deeply Nested Objects Handle Karne Me Useful: Complex objects ke liye kaam aata hai.

```js
let student = { name: "Aman", marks: { math: 95 } };
console.log(student.marks?.science); // ✅ Undefined
console.log(student.details?.age); // ✅ Undefined
```

# Shimmer UI: Shimmer UI ek placeholder loading effect hai jo page ke actual UI ka grey/skeleton structure show karta hai jab tak original content load nahi hota. Yeh better UX deta hai kyunki users ko ek idea mil jata hai ki page pe kya aane wala hai.

✅ Shimmer UI Banane ke Steps
1️⃣ Ek Shimmer Component Banao and style in css
2️⃣ Jab tak Data Fetch nahi hota, Shimmer dikhao in the Body
3️⃣ Data Load hone ke baad Actual Component dikhao

```js iss tarah se
if (listOfRestaurant.length === 0) {
  return <Shimmer />;
}
```

-> Call, setBtnNameReact ->

 <!-- Search Functionality -->

# whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

1️⃣ includes() with Strings:
Agar tumhe check karna ho ki ek string ke andar koi particular word ya character exist karta hai ya nahi, toh includes() use hota hai.

```js
const sentence = "Namaste React is awesome!";
console.log(sentence.includes("React")); // ✅ true
```

1. map()
   ✅ Used to transform each element of an array and return a new array.
   🔹 Returns an array of the same length.
   🔹 Doesn't modify the original array.

```js
const numbers = [1, 2, 3, 4];
const squared = numbers.map((num) => num * num);
console.log(squared); // Output: [1, 4, 9, 16]
```

2. filter()
   ✅ Used to filter elements based on a condition.
   🔹 Returns a new array with only elements that satisfy the condition.
   🔹 Doesn't modify the original array.

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
```

3. reduce()
   ✅ Used to accumulate values and return a single result.
   🔹 Takes a callback function and an initial value.
   🔹 Doesn't modify the original array.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
```

<!-- ----------------Practice-------------- -->

-> npm init -y
-> npm i -D parcel
-> npm i react
-> npm i react-dom
-> npm parcel index.html
-> Add in package.json:- "browserslist": [
"last 2 version"
]
-> "scripts": {
"start": "parcel index.html" // start index.html ko access kr rha hai
"build": "parcel build index.html",
"test": "jest"
},

- monolith
- microservices
- Approaches of react
- useEffect hook
- CORS
- optional chaining
- Shimmer UI
- map filter and reduce
