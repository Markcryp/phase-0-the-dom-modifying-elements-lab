// Write your code here!

// Remove the <main> element with id 'main'
const main = document.querySelector('main#main');
if (main) main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'mark njau is the champion';

// Append the new <h1> to the document body or another appropriate container
document.body.appendChild(newHeader);