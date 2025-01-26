# Planning to create App

- how is it look like
- header, body, footer
- how is it looks like body

<!--
* Header
    - logo
    - Nav Items
* Body
    - Search
    - restaurant-container
       - restaorant-card
* Footer
    - Copyright
    - Links
    - Address
    - contact
 -->

# Props : A: props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.

<RestaurantCard key={restaurant.data.id} resData={restaurant} />

- it is make component dynamic or flexible
- pass the data, one component to another component like: passing arguments to the function

# Config Driven UI : kuchh iss tarah ke kaam : hume ABC location pr UI alag chahiye

Config Driven UI ka matlab hai ki UI (User Interface) ka design aur functionality un configurations ke base par hota hai jo application ke data se milti hain. Yeh ek achhi practice hai kyunki isse applications zyada dynamic banti hain.

Yeh ek common aur basic approach hai jo user ke saath interaction ke liye use hoti hai. Config Driven UI ek generic interface provide karta hai jo aapke project ko acche se scale karne mein madad karta hai. Iska fayda yeh hai ki yeh development ka time aur effort kaafi bachata hai.

Ek typical login form, jo zyadatar apps mein common hota hai, iska ek udaharan ho sakta hai. In forms mein kai baar updates aate hain, jaise:

Form validations ka badhna
Dropdown options ka badalna
Ya design changes karna.
In sab ke liye Config Driven UI ek efficient solution provide karta hai.

# key

A: A key is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists. Keys should be given to the elements within the array to give the elements a stable identity.

# index as keys in React?

A: Yes, we can use the index as keys, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

{resList.map((restauran, index) => (
<RestaurantCard key={index} resData={restaurant} />
))}
