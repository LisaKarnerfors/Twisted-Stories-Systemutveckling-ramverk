import './style.css'


/* const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
` */

const result = document.querySelector("#resultText")!;
console.log(result);

/* Interfaces */
interface Person {
  firstName: string;
  lastName: string; 
}

/* Function */
function dating(person: Person) {
  return "Are you ready for dating, " + person.firstName + " " + person.lastName; 
}

/* Variabel */
let user = { firstName: "Wic",  lastName: "toria" };
console.log(user);

/* Kallar och skriver ut på sidan */
document.body.textContent = dating(user);


/* const left = document.querySelector<HTMLDivElement>('#leftBtn')!;
leftBtn?.addEventListener("click", ) 
console.log(left) */

const left = document.querySelector("#leftBtn")!;
console.log(left);

const right = document.querySelector("#rightBtn")!;/* 
rightBtn?.addEventListener("click", ); */
console.log(right);

/* function nextQuestion() {
 

} */

/* function currentQuestion() {

} */