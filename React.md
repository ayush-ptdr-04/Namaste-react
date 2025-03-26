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

### **CORS Error - Simple Explanation** 🚀

- CORS (Cross-Origin Resource Sharing) **ek security feature** hai jo **browser me built-in** hota hai. Ye **ek origin se dusre origin** (domain, protocol ya port) pr request ko **block** kar sakta hai **agar server usko allow na kare**.

---

## **1️⃣ CORS Kya Hai?**

CORS **ek rule hai jo browser follow karta hai** jab ek website kisi **dusre origin** se data fetch karti hai.

🛑 **Same-Origin Policy** (Default Rule):

- Agar **frontend ka origin** `https://frontend.com` hai
- Aur **backend API** `https://api.backend.com` pr hosted hai
- Toh browser **is request ko block karega** jab tak server isko allow na kare.

---

## **2️⃣ CORS Error Kyu Aata Hai?**

Browser **automatically security ke liye** ek rule follow karta hai **(Same-Origin Policy)**. Ye prevent karta hai **malicious websites** ko bina permission ke data access karne se.

Agar **backend proper CORS headers send nahi karta**, toh browser **error dega**:

```plaintext
Access to fetch at 'https://api.backend.com' from origin 'https://frontend.com'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present.
```

🚨 **Important:**

- **Browser request ko block nahi karta**
- **Wo sirf response ko block karta hai** agar backend ne proper CORS headers na diye ho

---

## **3️⃣ CORS Problem Kaha Hoti Hai?**

✔ **Ye frontend issue nahi hai**  
✔ **Ye browser ka bug nahi hai**  
✔ **Ye sirf backend configuration ka issue hai**

Bahut log sochte hain ki CORS **browser ka issue hai, par aisa nahi hai**. Ye **backend ka responsibility hai** ki wo allow kare **kaunse origins access kar sakte hain**.

---

## **4️⃣ CORS Error Fix Kaise Karein?**

### **✅ Step 1: Backend Ko Update Karein**

**Backend ko yeh headers send karne honge:**

```plaintext
Access-Control-Allow-Origin: *
```

➡ **Sabhi origins allow karega (Not Recommended for Production)**

Ya **specific frontend ko allow karein:**

```plaintext
Access-Control-Allow-Origin: https://frontend.com
```

---

### **✅ Step 2: Preflight Request Handle Karein**

Agar request complex hai (`POST`, `PUT`, `DELETE`, custom headers, etc.), to **browser pehle ek OPTIONS request send karega** (Preflight request).

Isko handle karne ke liye **backend ko yeh headers dene padenge:**

```plaintext
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

---

### **✅ Step 3: Development Me Proxy Use Karein**

Agar **backend update nahi kiya**, toh **temporary solution** ke liye proxy laga sakte hain.

#### 🔹 **React Me Proxy Setup**

`package.json` me yeh line add karein:

```json
"proxy": "https://api.backend.com"
```

Isse **sabhi requests same origin se jaayengi, aur CORS error nahi aayega**.

---

## **5️⃣ Kya CORS Ko Bypass Kar Sakte Hain?**

⛔ **Nahi!**

Koi bhi **hacks (browser extension ya CORS disable karna)** sirf temporary solution hai.  
Production me **sirf server-side fix kaam karega**.

---

## **6️⃣ Interviews Me Yeh Important Kyu Hai?**

CORS ka question check karta hai ki:  
✔ **Aapko web ka kaam samajh aata hai ya nahi**  
✔ **Aap debugging kaise karte ho**  
✔ **Aap frontend-backend ka real issue identify kar sakte ho ya nahi**

Agar aapne CORS samajh liya, toh **aapka confidence interview me aur bhi badh jayega!** 🔥
