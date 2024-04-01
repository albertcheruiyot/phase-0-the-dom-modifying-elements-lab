// Write your code here!
const mainElement = document.getElementById('main');
mainElement.remove();

const newHeader = document.createElement('h1');
newHeader.id='victory';

const myText = document.createTextNode('Albert is the champion');
newHeader.appendChild(myText);