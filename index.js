// Write your code here!
let mainHeader = document.querySelector('main');
mainHeader.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";

document.body.appendChild(newHeader);

newHeader.innerText = "John is the champion";
