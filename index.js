// Write your code here!
 var ela = document.getElementById('main')
ela.parentNode.removeChild(ela);//removes main element

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = " is the champion"
// document.body.appendChild(newHeader)
