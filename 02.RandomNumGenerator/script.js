const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNumber;
}

btn.addEventListener("click", generateNumber);

generateNumber();


// let  rand = 0;
// let min = Infinity;
// let max = -Infinity;
// let arr = [];

// // console.log (rand);

// for (i=1; i<100; i++){
//     rand = Math.floor(Math.random() * 100 + 1);
//     if (rand>max){
//       max = rand;
//     }
//     if (rand<min){
//       min = rand;
//     }
//     console.log (min, max);
//     arr.push(rand);


// }
// console.log (arr.sort((a,b) => a-b));