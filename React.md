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
