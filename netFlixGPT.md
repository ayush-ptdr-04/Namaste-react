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
- from validation
- useRef hook
- firebase setup
- create project on google-firebase for authentication

  - web<> => add firebase on your web-App : {🔹 Apni website ko Firebase se connect karna, Taaki tum Firebase ke features (jaise hosting, database, auth, etc.) use kar sako.}
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
  - npm run build
  - firebase deploy

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
  - useNavigate():[signIn, signUp or LogOut hone pr user konse url pr navigate hoga] in child component because routerProvider on the root level,
  - React Router ke navigate() function ya useNavigate() sirf Router ke context ke andar hi kaam karte hain, uske bahar nahi.
- browse page :
  - add signOut Api and navigate on the URL's and useSelector() use for fetch user data to the store
  - add updateProfile API and use useDispatch() for update new userData in the store
- bugFix: signUp user displayame and profile picture update
- bugFix: if the user is not loggedIn and He/She try to manualy change the path and go to browse page, so our app redirect to loggedIn path and, same for after loggedIn He/She try to manualy change the path and go to loggedIn so our app redirect to browse page{ move useNavigate() parent to children, inside routerProvider()}
- unSubscribed to the onAuthStateChanged callBack
- Add hardCoded data to constant file
- unsubscribe to the onAuthStateChanged callback
- Register TMDB API & create an app & get acces token
- get data from TMDB now playing movies list API

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

```js
useEffect(() => {
  onAuthStateChanged(auth, (user) => {});
});
// onAuthStateChanged(...) ye Firebase ka event listener hai.
// Ye listener lag jaata hai ek baar, fir jab bhi:- user login kare, user logout kare, page refresh ho, token expire/renew ho, to ye onAuthStateChanged automatically trigger hota rahega.
```

- navigate(): React Router ke navigate() function ya useNavigate() sirf Router ke context ke andar hi kaam karte hain, uske bahar nahi.
  navigate("/") ko yeh nahi pata ki / pr kaunsa component lagega.
  Usse bas path pata hai.
  Kaunsa component us path pr render hoga, wo Route ke through define hota hai.

- unsubscribe(): Jab tu onAuthStateChanged() lagata hai, wo Firebase me listener laga deta hai, Ab tu jab component unmount karega (ya page band karega), to tu chahata hai ki wo listener remove ho jaye, Isi liye onAuthStateChanged() ek function return karta hai — jisko commonly hum unsubscribe naam dete hain, Ye unsubscribe() function us listener ko hata deta hai, memory leak se bachata hai.

- TMDB: TMDB ka full form hota hai The Movie Database. Yeh ek free and open-source movie API hai jiska use developers karte hain movies, TV shows, actors, posters, ratings, aur trailers ki information lene ke liye.
  - register then create app token individualy app netflixGPT.
  - and method or tokenAPI ko constant me rakha and browse page to fetch API
