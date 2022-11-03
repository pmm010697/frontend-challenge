console.log('Contentscript injected');

// https://stackoverflow.com/questions/15505225/inject-css-stylesheet-as-string-using-javascript
// Used to inject the CSS stylesheet
function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

//https://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip
// Used to inject the tooltip
addStyle(`
    .budget_to_beat {
        display: flex;
        float: right;
        justify-content: space-between;
        color: white;
        margin: auto;
        background-color: darkBlue;
        text-align: center;
        border-radius: 15px;
        padding: 20px 50px;
        font-size: 20px;
        }

      .budget_to_beat:hover {
          background-color: blue; 
      }

      .budget_to_beat .tooltip {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
       
        /* Position the tooltip text - see examples below! */
        position: absolute;
      }

      .budget_to_beat:hover .tooltip {
        visibility: visible;
      }
  `);

// Get the Budget-to-beat value from the page
const euroValue = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(3) > p.makeStyles-btb-27',
).innerText;

console.log(euroValue);

// Create the element to display the value
let tooltip = document.createElement('div');
let element = document.createElement('span');

// Add the class to the element
element.classList.add('budget_to_beat');
tooltip.classList.add('tooltip');

// Add the value to the element
const img = document.createElement('img');
img.src = '/images/favicon-32x32.png';
const injectedText_1 = document.createTextNode(`Budget-to-Beat: ${euroValue}`);
const injectedText_2 = document.createTextNode(`Dummy Data on Climate Change`);
element.appendChild(img);
element.appendChild(injectedText_1);
element.appendChild(tooltip);
tooltip.appendChild(injectedText_2);

// Add the element to the page
const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > h1',
);
parentElement.appendChild(element);
