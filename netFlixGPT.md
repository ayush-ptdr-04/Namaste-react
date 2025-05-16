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
- get data from TMDB Now Playing API movies list API
- create custom hook useNowPlyaingMovies for clean code and browse file
- create movieSlice
- update store with movie data

- planning
<!--
<Header/>
- Main Container

  - VideoBackground
  - VideoTitle&Discription

- SecondaryContainer

  - MoviesList \* n
  - card \* n
    -->

- create all Components and use useSelector() for fetching data to the store.movies.nowPlayingMovies
- add data in VideoTitle and
- fetch data for VideoBackgroud to videos API and filter trailer
  const trailer = json.results.filter((video) => video.type === "Trailer");
  - if no type === "Trailer" availabel then we extract any video clip to json.results
    const trailer = filterData.length == 0 ? json.results[0] : filterData[0];
    and extract trailer.key put in any yt video link and embed yt video of that video link
- create movieTrailer custom hook
- create slice addTrailerVideo and update store
- embed use "?autoplay=1&mute=1" in <ifram>, for autoplay the video and add some styling in main container trailerVideo
- add tailwind on the browse page && trailer video , main container to look awesome

- Secondary Container
  <!-- Movies list = Popular
        moviesList * n
      MoviesList - now playing
      MoviesList - Trending
      MoviesList - horror
     -->

  - create components for mainTrailer, card, listOfCard, secondaryContainer
  - fetch data of nowPlayingMovies to the store and pass in ListContainer ans it's apply map function and it is pass key and poster_path in card and it's use imageURL + poster_path
  - and same as, creat hooks for Trending, Upcoming, popular movies for fetch data to seprate individual API and creat reducer fun. for add data in store and use useSelectore() in secondary container, hota hai.Poster banane ke liye API se poster_path milta hai aur usse ek image URL ke sath jod diya jaata hai.

- build GPT Search feature
- GPT Search Page
- GPT Search Bar
- (BONUS)- Multi-Language Feature in our APP
- creat Individual slices for toggel button(Gpt Search) and language change and store
- add Supported_lang in constant and create languageConstants for diffrent languages
- dispatch actions to header for toggelBtn and changeLanguag
- fetch data from store in header for toggelButton
- fetch data from store in searchBar for changeLang

- build movie suggesting component

  - Google gemini(free) -> npm install @google/generative-ai

  - ❌it's not working: creat opneAi account -> get oepnAi secret key -> save in constant file -> go on npm open ai and install -> fetch data to api + secret key, give query to the side of user -> So, get current Value to input(searchBar) using useRef() hook -> and creat query using currentValue , put in api for data fetching and <finally i got movies based on user searching>
  - that Gptmovies send to TMDB Search Movie API in the form of [array]
  - search TMDB API database for each movie using split -> map then Promise.all()
  - creat newReducer in gpt slice for storing {movieName and GptMovies}
  - now show all movies in <movieSuggetion/>
  - extract movis and name using useSelector from store.gpt
  - pass title and movie to <movieList/>

- create .env file for sensitive data
- add memoization technique in hooks
- Final portion of our netflixGPT is making Responsive

# Features

- You can use [Formik library] for create forms
- transformation hindi, english, japanies languages

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

inside jsx alway use camelCasing

- pahle tmdb se playing movies ki API se sari movies nikali fir main movie ke usme se ek movie selsct ki uski id nikali or iss movie ka trailer nikalne ke liye videos API me Id daali fir clips , teaser or trailer ki list se ek trailer video nikala, fir uss trailer video me se key nikali or yt video link me put ki or waha se embed code nikala

---

### ✅ **Step-by-Step Process:**

1. **Get Now Playing Movies:**

   - API: `https://api.themoviedb.org/3/movie/now_playing`
   - Response me `results` array milega → usme se movies milengi.

2. **Select One Movie:**

   - `const movieId = results[0].id;` (ya koi bhi movie tu select kare)

3. **Use That `movieId` to Get Videos:**

   ```js
   const res = await fetch(
     `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
     API_OPTIONS
   );
   const data = await res.json();
   ```

4. **Filter Trailer:**

   ```js
   const trailer = data.results.find(
     (video) => video.type === "Trailer" && video.site === "YouTube"
   );
   ```

5. **Get YouTube Video Key:**

   ```js
   const videoKey = trailer?.key;
   ```

6. **Generate YouTube Embed Link:**
   ```js
   const embedUrl = `https://www.youtube.com/embed/${videoKey}`;
   ```

- Secondary Container
- API se data hooks ke through fetch hota hai.
- Redux store mein data dispatch hota hai.
- useSelector se data components tak aata hai.
- MovieList banake cards render kiye jaate hain.

- Har category (jaise Trending, Popular, etc.) ke liye custom hook banaye jaate hain.Ye hooks API se data fetch karke Redux store mein dispatch karte hain.Example: useNowPlayingMovies, useTrendingMovies, etc.
- Redux store se data access karne ke liye useSelector hook use hota hai.Har category ka data SecondaryContainer me laaya jaata hai.
- SecondaryContainer mein har category ke liye ek MovieList component banaya jaata hai.MovieList ke andar map() function ka use karke har movie ke liye ek MovieCard render kiya jaata hai.
- MovieCard mein movie ka poster image show

- Memoization is an optimization technique used to speed up algorithms by storing the results of expensive function calls and reusing them when the same inputs occur again. It’s commonly used in dynamic programming to avoid recalculating the same subproblems multiple times.

- bg-black(for-mobiles) sm:bg-blue-900() md:bg-green-900(for desktop)

```js
- react icons setup
npm install react-icons
import {
  FaTachometerAlt,
 ............
} from "react-icons/fa";
and use <FaTachometerAlt/>
```

--
