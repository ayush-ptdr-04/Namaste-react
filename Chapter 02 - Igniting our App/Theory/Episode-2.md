1. NPM - it's behinde the scene works as node package manager
   it is not stands for node package manager.

2. package.json - it is configration for NPM.

- npm init create package.json file
- we use npm because we want a lot of packages in our project / react app
- npm init-y :- will skip lot of option

3. Dependencies - Node.js, dependencies are packages, libraries, or modules that a project needs to function. Dependencies are defined in the project's package.json file, Ye wo packages hain jo production me bhi zaruri hote hain. Matlab jab app live chalega, tab inka use hoga.

- when we will install any dependencie any package in our app , we had same command:-
  Example: Libraries like express, react, etc.
  npm install express

4. DevDependencies - Dependencies are packages needed for an application to run in production, while devDependencies are packages needed for development and testing, Ye wo packages hain jo sirf development ke time kaam aate hain. App ke live hone ke baad inki zarurat nahi hoti.

- npm install -D parcel
- Caret(^) and tidle(~) sign:- our project will automatically update if we use caret sign.
  "devDependencies": {
  "parcel": "^2.13.3"
  }

5. BUNDLERS - The primary purpose of bundlers is to organise modules and dependencies in front-end projects, optimise website performance, and reduce file sizes.

- most bundlers do the same job
- bundlers are packages. if we want to use package in our code, we have to use "package manager"(NPM)
- webpack, vite, parcel :- this are bundlers

6. package-lock.json - it will tell we which exact version of the library we are using

7. node-moduls - which gets installed is like a database for the npm.

- it is contains data of dependencies.
- node_modules folder ko generally version control (e.g., Git) me nahi add kiya jata.
- because our package-lock.json file have sufficient information to recreate node_modulse
- so use .gitigonre file
