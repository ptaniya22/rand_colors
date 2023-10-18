let box = document.querySelector('.box');
let amount = 638;
let randColor = '';
// let colors = ['orange', 'red', 'green', 'blue', 'purple'];

for (let i = 0; i < amount; i++) {
  let item = document.createElement('div');
  item.classList.add('item');
  box.append(item);
  item.addEventListener('mouseover', () => setColor(item));
  item.addEventListener('mouseleave', () => removeColor(item));
}

function setColor(el) {
  el.style.background = randomColor();
}

function removeColor(el) {
  el.style.background = '';
}

function randomColor() {
  let redIndex = Math.floor(Math.random() * 256);
  let greenIndex = Math.floor(Math.random() * 256);
  let blueIndex = Math.floor(Math.random() * 256);
  randColor = `rgb(${redIndex}, ${greenIndex}, ${blueIndex})`;
  // console.log(randColor);
  return randColor;
}
