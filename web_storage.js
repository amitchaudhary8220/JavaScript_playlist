// sessionStorage is similar to localStorage ; the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.

localStorage.setItem('myCat', 'Tom');
const cat = localStorage.getItem('myCat');
console.log(cat);
localStorage.removeItem('myCat');


sessionStorage.setItem();

