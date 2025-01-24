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
