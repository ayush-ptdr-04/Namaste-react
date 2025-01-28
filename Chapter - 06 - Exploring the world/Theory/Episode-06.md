# Monolith architecture ek traditional software development model hai jisme pura software ek single unit me bana hota hai. Isme sab services (jaise database, server, aur UI) ek hi application file ke andar hoti hain.

- Agar kuch changes karne ho, toh puri application ko update aur redeploy karna padta hai.............

# Microservices ek software development ka approach hai jisme hum apne software ko chhote-chhote independent services me tod dete hain. Yeh har service apna kaam alag-alag karti hai aur ek doosre ke saath APIs (Application Programming Interfaces) ke through communicate karti hai.

- Pura software ek bade system ke bajay chhote modules me divide hota hai, jisme har ek ka apna specific kaam hota hai.
- Example: Ek service sirf database handle karegi, doosri service sirf UI ke liye hogi.
- Har service independently kaam kar sakti hai aur apne aap deploy ho sakti hai.
- Agar ek service fail ho jaye, toh puri application band nahi hoti. Sirf woh service fix karni padti hai.
- Yeh architecture system ko fast, scalable, aur flexible banata hai.
- Easy maintenance aur deployment ki wajah se industry me kaafi popular hai.

# Comparison with Microservices

=> Monolith Architecture: Sab kuch ek jagah pe hota hai (single codebase), all processes are tightly coupled and run as a single service.
Example: Pura restaurant ka kitchen ek hi stove par kaam kare.

=> Microservices Architecture: Software ko chhote-chhote parts me tod dete hain, an application is built as independent components that run each application process as a service..
Example: Kitchen ka alag-alag kaam (jaise cutting, cooking, cleaning) alag-alag team karti hai.

# Loads -> render -> Api -> re-render

# useEffect ek JavaScript function hai jo React provide karta hai. Yeh hook components ke andar side effects handle karne ke liye use hota hai.

- Side effects wo operations hote hain jo component ke bahar ya bahar ki states pe depend karte hain, jaise:
- API data fetch karna, DOM ko directly update karna, Timers ya subscriptions setup karna

# first body will be renderd then useEffect called

# Allow cors extention in the browser search(cors extentiion and add to chrom )

# CORS (Cross-Origin Resource Sharing):-

- CORS ek HTTP header-based mechanism hai jo browser aur server ke beech cross-origin requests ko manage karta hai. Iska main purpose hai ki ek server ko yeh bataya ja sake ki konsi origin (domain, port, ya scheme) se resources ko load karna allowed hai.
- Browsers by default cross-origin requests ko block karte hain agar server CORS headers ke saath permissions nahi deta. Isliye aapka request block ho raha hai.
