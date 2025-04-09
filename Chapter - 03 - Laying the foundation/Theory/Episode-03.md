"scripts": {
"start": "index.html", start index.html ko access kr rha hai
"build": "parcel build index.html",
"test": "jest"
},

# "scripts" section in package.json, yeh ek shortcut hai jo aapke project ke common tasks ko easily run karne ke liye banaya gaya hai. : npm run start or npm start : start the project

# npm run build: chalane ke baad aapko ek dist folder milega jo aapke optimized project ka final version contain karega, ready for production or live deployment.

## Q: What is `JSX`?

A: JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
JSX makes it easier to write and add HTML in React.
JSX converts HTML tags into react elements.

## Q: Superpowers of `JSX`.

A: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

## Q: Role of `type` attribute in script tag? What options can I use there?

A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.

# ES6 : ES6 ka full form hai ECMAScript 6. ECMAScript JavaScript ko standardize karne ke liye banaya gaya tha, aur ES6 iska 6th version hai jo 2015 mein publish hua tha.

Parcel ek build tool hai jo React components ko readable format me convert karta hai, taki browser unhe samajh sake. React ke components aur JavaScript code ko ES6+ syntax me likha jata hai, jo kuch purane browsers directly samajh nahi sakte.

Parcel is code ko transpile aur bundle karta hai using Babel, jo ES6+ code ko ES5 me convert kar deta hai (jo zyada tar browsers samajh sakte hain).

- Script
- JSX
- type attribute
- ES6
