// @ts-nocheck
const countSpan = document.getElementById("count"); // span
const minusBtn = document.querySelector("#minusBtn"); // button
const plusBtn = document.getElementById("plusBtn"); // button
let count = 0;
// const add = () => {
// }
plusBtn.addEventListener("click", () => {
    count += 1;
    countSpan.textContent = count;
});

minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count -= 1;
        countSpan.textContent = count;
    }
});
