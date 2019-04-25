//remove #main from html
document.getElementById('main').remove();

//has nw header h1#victory
let newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.innerHTML = 'Josh is the champion';
