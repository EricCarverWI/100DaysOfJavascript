// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");


buttons.addEventListener('click', (e) => {
    // console.log (e.target);
    const btn = e.target.closest('button')
    if (btn.classList.contains('add')) count.innerHTML++;
    if (btn.classList.contains('subtract')) count.innerHTML--;
    if (btn.classList.contains('reset')) count.innerHTML = 0;
    // console.log (e.target.classList);
    setColor();
  });

  function setColor() {
    count.style.color = '#fff'
    if (count.innerHTML > 0) count.style.color = 'black';
    if (count.innerHTML < 0) count.style.color = 'orangered';
  };
