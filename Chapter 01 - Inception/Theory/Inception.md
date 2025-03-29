1. what is emmet
   => Emmet ek tool hai jo web development mein fast aur efficient coding ke liye use hota hai. Shortcuts ko expand karke aapka time bachaata hai.
2. what is CDN
   => CDN ek globally distributed network hai jo content ko users tak fast aur efficiently deliver karne ke liye design kiya gaya hai.

   -> Jab user koi request karta hai (jaise ek React library ko load karna), toh CDN nearest server se content provide karta hai.

   -> The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

3. Difference between a Library and Framework?
   => Collection of Tools: React is a JavaScript library for building user interfaces, especially for single-page applications.

-> Your Control: With React, you decide how to structure your application. You call the functions and methods provided by React to create components, manage state, and handle events.

-> Example: Using React is like having a set of tools (like hammers and nails) to build parts of your house (user interface) as you see fit. You are free to design the structure and layout.

=> Framework-Example: Using Next.js is like having a pre-designed house plan (framework) where the main structure is already determined (routing, rendering). You still build the rooms and decorate (using React components), but within the guidelines set by Next.js.

4. Why is React known as React?
   => iska naam "React" rakha gaya, kyunki ye data aur user actions par react karta hai.

-> React ki power hai virtual DOM ka use karke changes ko efficiently handle karna.
Jab bhi state ya data update hota hai, React turant UI ko reactively update karta hai.

-> React ka main focus hai fast aur dynamic user interfaces banane par.
Ye user ke actions ka turant reaction karta hai.

-> Aapko manually DOM update nahi karna padta; React automatically handle karta hai.

5. What is crossorigin in script tag?
   => crossorigin ka kaam hai CORS (Cross-Origin Resource Sharing) requests ko handle karna.

-> Jab aap ek domain (website) se dusre domain se koi resources (jaise script ya data) load karte ho, toh browser check karta hai ki sharing safe hai ya nahi.

-> crossorigin attribute browser ko batata hai ki ye request safe tarike se kaise handle karni hai.

-> Iska main purpose dusre domains ke resources ko securely share karna hota hai.

<script crossorigin="anonymous|use-credentials">
```
6. What is difference between React and ReactDOM?
=> React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM. The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

7. What is difference between react.development.js and react.production.js files via CDN?
9. What is async and defer?
