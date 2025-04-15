# netflix-GPT

- npm create vite@latest netflix-gpt => cd netflix-gpt, npm install, npm run dev
- cleanUp files: App.jsx , .css, image Delete
- install tailwind :
  - npm install tailwindcss @tailwindcss/postcss
  - creat .postcssrc
  - @import "tailwindcss"; in index.css
  - npm run dev
- npm i react-router-dom
- Login Form
- SignIn/SignUp Form
- from calidation
- useRef hook
- firebase setup
- create project on google-firebase for authentication

  - web<> => add firebase on your web-App : {🔹 Apni website ko Firebase se connect karna.
    Taaki tum Firebase ke features (jaise hosting, database, auth, etc.) use kar sako.}
    - npm i firebase
  - authentication => select sign-in method { <incognito mode hona chahiye tab hi email/password enable ho payega>}

  - npm i -g firebase-tools { 🔹 Ye ek command hai jo Firebase ka CLI (Command Line Interface) install karta hai tumhare system me.
    Aur ye help karta hai Firebase ke projects ko terminal se handle karne me.
    }
  - fire-base login : "firebase login" {Firebase CLI ke through Google Account se login karne deta hai — taaki CLI tumhare Firebase projects ke saath kaam kar sake (jaise deploy, init, etc.)}
  - initialize firebase : "firebase init", then select hosting
  - "npm run build" Ye tumhare project ka production-ready version banata hai.
    <firebase.js me "public" : "dist" hona chahiye vite me dist use hota hai>
    and <vite.config.js me export default defineConfig({
    base: "/",
    plugins: [react()],
    });
    >
  - Deploy command : "firebase deploy"

- deploying our app to production
- create sign up user account using createUserWithEmailAndPassword and signInWithEmailAndPassword
  - implement signIn user API Create a password-based account {User apna email aur password dekar sign up karega, aur baad mein wahi email-password use karke login karega.}
- redux setUp
  - npm install @reduxjs/toolkit
  - npm install react-redux
  - create appStore.js using configureStore()
  - creat slice.js using createSlice
  - provide appStore using <Provider store={appStore}/> to the root component
- onAuthStateChanged use on the root component and also use dispatch, it is dispatch the action and pass the auth data, { ✅ Real-time user state track karne ke liye, Jab bhi user SignIn, SignUp ya SignOut karta hai, ya app start hote hi agar user already login hai, to onAuthStateChanged trigger hoga .}
  - useNavigate():[signIn, signUp or LogOut hone pr user konse url pr navigate hoga] in child component because routerProvider on the root level

# Features

- You can use [Formik library] for create forms

# Hook useRef()

```js
-(<form onSubmit={(e) => e.preventDefault()}></form>); // it is stop refreshing page
```

# using google fire base Backend as a service(BaaS)

- create project on firebase

- 🔥 Firebase ka kaam:
- Authentication ke liye use hota hai (signup/login/logout).
- User ka basic data (email, uid, etc.) handle karta hai.
- Par ye data frontend me directly accessible nahi hota hamesha ya har screen pe easily nahi milta.

- 💡 Redux ka kaam:
- Redux ek frontend state management tool hai. Firebase backend pe kaam karta hai, Redux frontend ke andar user ka data store karke har jagah access dene me help karta hai.
- User ka login state track karna (like isLoggedIn)
- UI me har jagah user data chahiye (like profile photo, name)
- App me multiple screens pe data share karna

```js
🧠 Ek Example:
// Jab user login karta hai Firebase ke through, to uska data Redux store me daal do:
dispatch(setUser({ name, email, uid }));
// Ab is data ko tum kahin bhi app me use kar sakte ho bina Firebase se dobara fetch kare.
```
