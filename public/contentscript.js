console.log('Contentscript injected');

// Get the Budget-to-beat value from the page
const euroValue = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(3) > p.makeStyles-btb-27',
).innerText;

console.log(euroValue);

// Create the element to display the value
let element = document.createElement('div');

const img = document.createElement('img');
img.src = '/images/favicon-32x32.png';

const injectedText = document.createTextNode(`Budget-to-Beat: ${euroValue}`);

element.appendChild(img);
element.appendChild(injectedText);

// Style the element
element.style.display = 'flex';
element.style.float = 'right';
element.style.justify = 'space-evenly';
element.style.color = 'white';
element.style.margin = 'auto';
element.style.backgroundColor = 'darkblue';
element.style.textAlign = 'center';
element.style.borderRadius = '15px';
element.style.padding = '20px 50px';
element.style.fontSize = '20px';

// Add the element to the page
const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > h1',
);
parentElement.appendChild(element);
