1. What are the different types of Testing?

- Testing ensures that the application works correctly and without errors.
  1️⃣ Unit Testing 🧩

  - Chhoti functionalities ya components ko alag se test karna.
  - Yeh check karta hai ki har function/component sahi kaam kar raha hai ya nahi.

  2️⃣ Integration Testing

  - Different components ya modules ek saath kaise kaam karte hain, yeh test karna.
  - Yeh ensure karta hai ki backend aur frontend ya multiple components sahi tarike se interact kar rahe hain.

  3️⃣ End-to-End (E2E) Testing 🌍

  - Full application ka flow test karna, jaisa ek real user karta hai.
  - Jaise ek user login kare, cart me product add kare, checkout kare, payment kare – yeh sab test hota hai.

# Settng Up Testing in our app

- Install React Testing Library : npm i -D @testing-library/react
- Install Jest : npm i -D jest
- Install babel dependencies : npm install -D babel-jest @babel/core @babel/preset-env
- Configure babel
- Configure parcel Configur file to disable default babel transpilation
- Jest Configuration : npx jest --init
- Install jest-environment-jsdom : npm install -D jest-environment-jsdom

● React Testing Library (RTL) ek testing utility hai jo React components ko test karne ke liye use hoti hai. Ye real user behavior ko simulate karke check karti hai ki tumhara UI sahi kaam kar raha hai ya nahi.
● React Testing Library Jest uses behind the scenes
● It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

● Install React Testing Library : npm install -D @testing-library/react
● Install Jest : npm install -D jest
● We are using jest with Babel, hence we need to install some dependencies as well. : npm install –D babel-jest @babel/core @babel/preset-env

● Once we install the dependencies, we have to configure babel as well. Create babel.config.js file and below code in it:

```js
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```

● We are using parcel and parcel uses babel. So Parcel has its own configuration of babel already.
● When we created babel.config.js, we were creating our ownconfiguration of babel which conflicts with the existing configuration
of babel.
● The new configuration of babel will overwrite the existing configuration done by Parcel. To avoid this, we should refer to the official documentation of Parcel - Usage with other tools.

● The above configuration will disable default babel transpilation configured by Parcel. Now we can use our own config file for Babel.
● As per the documentation, we have to create a file .parcelrc and below configuration:

```js
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

=> Command to run test cases - npm run test

● Configure Jest : Initialize Jest -
Answer a few questions for initializing Jest

1. Would you like to use TypeScript for the configuration file? -> no (in this case)
2. Choose the test environment that will be used for testing -> jsdom (browser-like)
   a. JSDOM is a library which parses and interacts with assembled HTML just like a browser.
   b. When we run test cases, we do not run them on the browser.But we need a browser-like environment to run them.
   c. JSDOM helps us to get a browser-like environment. It will give us the features of a browser.
3. Do you want to add coverage reports? -> Yes
4. Which provider should be used to instrument code for coverage? -> Babel
5. Automatically clear mock calls, instances, contexts and results before every test? -> Yes

● Install jest-environment-jsdom : npm install -D jest-environment-jsdom
