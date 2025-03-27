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
- Install @babel/preset-react : npm install -D @babel/preset-react (@babel/preset-react is helping to convert JSX into HTML.)
- include @babel/preset-react babel Config
- install testing-library/jest-dom : npm install -D @testing-library/jest-dom

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

# Basics of Testing : Test a function which returns the sum of 2 numbers

● Create a file named sum.test.js

```js sum.js
export const sum = (a, b) => {
  return a + b;
};
```

# Approach 1: Create a folder named( \_\_tests\_\_). Jest will track all the files from this folder and execute the test cases. Jest will consider all the files in this folder as test files. {src/ ke andar **tests** folder banao.}

# Approach 2: Suppose we have a file sum.js. If the name of the file in which you have written test cases matches any of the below filenames, then it will be considered as a test file.

1. sum.test.js
2. sum.test.ts
3. sum.spec.js
4. sum.spec.ts

● Then we can run our command npm run test to test the component. When we do that, we will get the below any error: This error says that we can not use JSX inside our test case. JSX isn’t enabled for our test cases. The error also says that to make the JSX work, we have to add @babel/preset-react

● Install @babel/preset-react : npm install -D @babel/preset-react
Include @babel/preset-react inside babel config file.

```js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }], // Jest ke liye
    ["@babel/preset-react", { runtime: "automatic" }], // React JSX ke liye
  ],
};
```

● Why do we need to add this in the config file ? : @babel/preset-react is helping to convert JSX into HTML.
Now when we run npm run test, we will get another error.
The error says that toBeInTheDocument() is not a function. This happened because we have to install one more library i.e. : @testing-library/jest-dom

● Install @testing-library/jest-dom : npm install -D @testing-library/jest-dom
We need to import this library in our test file. : import "@testing-library/jest-dom";

- Now when we run the command <npm run test>, this time our test cases will be passed.

```js /src/__test__/sum.test.js
import { sum } from "../sum"; //● Import the sum() function from sum.js.
// ● We use the test() function to write test cases.

// The test() function has 2 argument:
// ○ Description of the test case
// ○ A callback function which tests the function
test("Sum function should calculate the two numbers", () => {
  const result = sum(4, 4);

  // Assertion:  iska use isliye hota hai taaki check kiya ja sake ki output expected result ke barabar hai ya nahi. hai to test case pass
  expect(result).toBe(8);
});
```

# Grouping of test cases : ● We can group all the test cases in a file using the describe() function

```js
describe("test case for sum component", () => {
  test("", () => {});
  test("", () => {});
  test("", () => {});
});
```

Note: We can also change the name of function test() to it(). They both work the same way. it() is like an alias of test()
Note: Add the /coverage folder to .gitignore. This folder contains the data about how many files it has covered while testing.

```js
test("should render component with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});
```

Yeh test **React Testing Library** aur **Jest** ka use karke check karta hai ki **"Cart" text render ho raha hai ya nahi.**

1️⃣ **`render(...)`**

- Yeh function **React component ko test environment me render** karta hai.
- `BrowserRouter` wrap kiya gaya hai taaki routing sahi se kaam kare.
- `Provider` use kiya gaya hai **Redux store provide karne ke liye.**

2️⃣ **`screen.getByText(/Cart/)`**

- Yeh function page se **"Cart" text dhundh raha hai** (case-insensitive).
- **Regex (`/Cart/`)** ka use kiya gaya hai taaki exact match na bhi ho tab bhi kaam kare.

3️⃣ **`expect(cartItems).toBeInTheDocument();`**

- Yeh check karega ki **"Cart" text present hai ya nahi.**
- Agar **Cart nahi mila** toh test **fail** ho jayega.

### **🎯 Purpose of This Test**

✅ Ensure karega ki **Header component sahi se render ho raha hai.**  
✅ Check karega ki **Redux store se data aaya ya nahi.**  
✅ **Routing issues detect** karne me madad karega.

Yeh **unit test** ensure karta hai ki **Cart item dikh raha hai** ya nahi. Yeh React applications me **UI testing** ka ek important part hai jo **bugs pakadne me madad karta hai.** 🚀

# Testing a component which takes props = search.test.js, Header.test.js

# Integration Testing :● Consider that we have <Body> component which has a Search boxand Seach button

● When we run the npm run test command, it gives an error: fetch is not defined.
● Hence this super power of browser i.e. fetch() does not exist on JSDOM. So we have to create a mock function the same way we created the mock data.

# Note: A test case does not make an actual API call. Because we do not run it on the browser, so it does not have power to talk to the world

● So we will have to create the mock function the same way the actual fetch() function works.

# act → Async updates ko handle karne ke liye.

Note: Currently, we have to run the npm run test command again and again after creating test cases. To solve that issue, we can add a new command in the package.json file inside our scripts.

=> “watch-test”: “jest –watch”

And instead of using npm run test command, we can use <npm run watch-test>.

# act → Async updates ko handle karne ke liye. : Whenever we are using fetch() inside the test case, we should always wrap our render() inside act() function

● We will import the act from react-dom/test-utils.
● Then we will make the callback function of it() function async.
● Then we will use the await keyword before act().
● Inside the act() function, we will pass an async callback function which will render the <Body> component.

# Test case for Body component => <search.test.js>

# Helper functions :

1. beforeAll() - This function will be called before running all the test cases.
2. afterAll() - This function will be called after running all the test cases.
3. beforeEach() - This function will be called before running every single test case.
4. afterEach() - This function will be called after running every single test case
