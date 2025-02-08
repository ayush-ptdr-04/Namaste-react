<!-- Routing -->

Q: What would happen if we do console.log(useState())?
A: If we do console.log(useState()), we get an array [undefined, function] where first item in an array is state is undefined and the second item in an array is setState function is bound dispatchSetState.

Q: How will useEffect behave if we don't add a dependency array?

<!-- useEffect(() => {
.......
}, []); -->

Case: 1. - When the dependency array is not included in the arguments of useEffect() hook, the callback function will be executed every time the component is rendered and re-rendered.

  <!-- useEffect(() => {
  console.log("I run everytime this component rerenders")
  }); -->

Case:- 2 When the dependency array is empty in the arguments of useEffect() hook, the callback function will be executed only one time during the initial render of the component.

<!-- useEffect(() => {
console.log("I Only run once (When the component gets mounted)")
}, []); -->

Case:- 3. - When the dependency array contains a condition, the callback function will be executed one time during the initial render of the component and also rerender if there is a change in the condition.

<!-- useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]); -->

# Routing: Routing ko simple words mein samjhaun, toh yeh ek tarika hai jisse hum decide karte hain ki konsa content (ya page) kis URL par display hoga. Jaise agar aap kisi website par jaate hain aur Home, About, ya Contact page par click karte hain, toh routing hi decide karti hai ki aapko konsa page dikhaya jaye.

- Routing in Web Development:
- Client-Side Routing: Ye frontend (browser) mein hota hai. Jaise React, Angular, ya Vue.js mein.
  Example: Agar aap /about par jaate hain, toh page reload nahi hota, bas content change hota hai.
- Server-Side Routing: Ye backend (server) mein hota hai. Jaise Express.js (Node.js) mein.
  Example: Agar aap /about par jaate hain, toh server naya page bhejta hai.

# React (Single-Page Applications (SPA)): Page reload nahi hota, bas content change hota hai.

`js import { createBrowserRouter, RouterProvider } from "react-router-dom"; `
1️⃣ createBrowserRouter
Ye ek router banata hai jo Browser ke URL ke basis pe routes handle karta hai.

<!-- // 1️⃣ Router banaya
const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> }, // / pe Home component show hoga
  { path: "/about", element: <About /> }, // /about pe About component show hoga
  { path: "/contact", element: <Contact /> }, // /contact pe Contact component show hoga
]); -->

2️⃣ RouterProvider
Yani createBrowserRouter se jo router bana hai, usko React ke andar enable karne ke liye RouterProvider ka use hota hai.

<!-- const App = () => {
  return (
    // 2️⃣ RouterProvider me router pass kiya
    <RouterProvider router={appRouter} />
  );
}; -->
