# NPM - it's behinde the scene works as node package manager

- it is not stands for node package manager.

# package.json - it is configration for NPM.

- npm init: create package.json file
- we use npm because we want a lot of packages in our project / react app
- npm init-y :- will skip lot of option

# Dependencies - Node.js, dependencies are packages, libraries, or modules that a project needs to function. Dependencies are defined in the project's package.json file, Ye wo packages hain jo production me bhi zaruri hote hain. Matlab jab app live chalega, tab inka use hoga.

- when we will install any dependencie any package in our app , we had same command:-
  Example: Libraries like express, react, etc.
  npm install express

# DevDependencies - Dependencies are packages needed for an application to run in production, while devDependencies are packages needed for development and testing, Ye wo packages hain jo sirf development ke time kaam aate hain. App ke live hone ke baad inki zarurat nahi hoti.

- Nodemon development ke time code ko automatically restart karne ke liye hota hai
- npm install -D parcel
- Caret(^) and tidle(~) sign:- our project will automatically update if we use caret ans tilde sign.
  "devDependencies": {
  "parcel": "^2.13.3"
  }

# BUNDLERS - The primary purpose of bundlers is to organise modules and dependencies in front-end projects, optimise website performance, and reduce file sizes.

- most bundlers do the same job
- bundlers are packages. if we want to use package in our code, we have to use "package manager"(NPM)
- webpack, vite, parcel :- this are bundlers : web application bundler that can be used to build React applications

# package.json

- Socho ye ek menu card hai.
- Isme sirf dish ka naam (dependencies ka naam) aur unki approximate recipe (version) likhi hoti hai.
- Example:
  "Mujhe ek pizza chahiye (React) jo medium size ka ho (approx version)."
  "Mujhe React chahiye, jo version 18 se upar ho."

# package-lock.json

- it will tell we which exact version of the library we are using
- Ye chef ki notebook hai jo exact recipe aur ingredients ka formula likhti hai.
- Isme dependencies ka exact version aur unke andar ki chhoti-chhoti dependencies ka bhi version hota hai.
- Example:
  "Pizza ka size 10 inches hai, cheese Mozzarella hai, aur sauce spicy hai (exact details)."
  "React v18.2.0 kaunsa oil, spices aur exact steps se bana hai, wo sab yahan likha hai."

# node-moduls - which gets installed is like a database for the npm.

- it is contains data of dependencies.
- node_modules folder ko generally version control (e.g., Git) me nahi add kiya jata.
- because our package-lock.json file have sufficient information to recreate node_modulse
- so use .gitigonre file.

=> Parcel aur, aur koi package Node ke saath by default nahi aata.
NPM ke through hum package ko server se download karte hain.
node_modules ek local folder hai jaha downloaded packages store hote hain.
Node.js sirf ek medium hai jo package ko fetch aur manage karta hai.

# aapko Git repository me sirf un files ko rakhna chahiye jo aapke project ke liye zaruri aur unique hain, aur jo files aap easily dobara generate kar sakte ho, unhe Git me save nahi karna chahiye, Use .gitignore to avoid unnecessary files in Git. like: node_moduels, dist, ...-cache

# Ignite our App

# NPX : execute a npm package, its automatic download with NPM

npx parcel index.html

<!-- put CDN links in html file: is not to good way beacause we already have react and react-dom in node_modules and CDN links make our operation costely -->

npm i react
npm i react-dom

now no need the CDN links

# Parcel

- Parcel ek modern JavaScript bundler hai jo aapke web project ke HTML, CSS, JS, images, aur other assets ko bundle karke ek optimized output banata hai. Ye zero-configuration ke saath kaam karta hai, yani aapko manually setup karne ki zarurat nahi hoti.
- Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start

# Features

- HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
- File watcher algorithm - made with C++
- Minification
- Cleaning our code
- DEV and production Build
- Super fast building algorithm
- Image optimization
- Caching while development
- Compresses
- Compatible with older version of browser
- HTTPS in dev
- Port Number
- Consistent hashing algorithm
- Zero Configuration
- Automatic code splitting
- Tree shaking
