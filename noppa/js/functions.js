
const getRandomIntNumberInRange = (min, max) => {
return Math.floor(Math.random() * max) + min;
}

document.querySelector('button').addEventListener('click'), () =>{
const randomized_number = getRandomIntNumberInRange(1,6)

if (randomized_number === 1) {
<div id="dice"><img src="./img/1.png"/></div>

}

if (randomized_number === 2) {

<div id="dice"><img src="./img/2.png"/></div>
}

if (randomized_number === 3) {

<div id="dice"><img src="./img/3.png"/></div>
}

if (randomized_number === 4) {
<div id="dice"><img src="./img/4.png"/></div>

}

if (randomized_number === 5) {
<div id="dice"><img src="./img/5.png"/></div>

}

else (randomized_number === 6); {

<div id="dice"><img src="./img/6.png"/></div>
}

}