'use strict';

let shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let allShops = [];

// First step of DOM Manipulation:
let tableElem = document.getElementById('table');

// from MDN
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

  function makeHeader(){
    let tableRow = document.createElement('tr'); 
    // <tr></tr> skip 3 because no need for text
    tableElem.appendChild(tableRow);
    // <table><tr></tr></table>

    let firstCell = document.createElement('td');
    // <td></td>
    firstCell.textContent = 'Locations';
    tableRow.appendChild(firstCell);
    // <table> <tr> <td></td> </tr> </table>

    for (let i = 0; i < shopHours.length; i ++) {
      let tableData = document.createElement('td')
      // nothing in here. not in our html
      // next we give it content
      tableData.textContent = shopHours[i]; 
      // the first loop will be 6am and so on...
      tableRow.appendChild(tableData);
    }

  }
}

// CONSTRUCTOR FUNCTION

function Shop (locationName,locationMin, locationMax, locationAvg){
  this.locationName = locationName;
  this.locationMin = locationMin;
  this.locationMax = locationMax;
  this.locationAvg = locationAvg;
  this.customersPerHour = 0;
  this.cookiesPerHour = [];

  allShops.push(this);
}

// DEFINE PROTOTYPE

Shop.prototype.getCookieNum = function() {
  for (let i = 0; i < shopHours.length; i++) {
    let customerNum = randomCustomer(this.locationMin, this.locationMax);
    //  40 
    let cookieNum = Math.round(customerNum * this.locationAvg);
    //  40*6.3 = cookieNum
    this.customersPerHour += cookieNum;
    // CALCULATE THE TOTAL -- THIS.TOTAL = THIS.TOTAL + COOKIENUM
    this.cookiesPerHour.push(cookieNum);

  }
} ;
Shop.prototype.render = function(){
  let tableRow = document.createElement('tr'); 
  tableElem.appendChild(tableRow);

  let city = document.createElement('th');
  // th is for table heading. used as a title of sorts
  city.textContent = this.locationName;
  tableRow.appendChild(city);

  for (let i = 0; i <this.cookiesPerHour.length; i ++) {
    let tableData = document.createElement('td');
    tableData.textContent = this.cookieNum[i];
    tableRow.appendChild(tableData);

    let totalRow = document.createElement('td');
    tableRow.textContent = this.customersPerHour;
    tableRow.appendChild(totalRow);
  };

  let seattle = new Shop('Seattle', 23, 65, 6.3);
  let tokyo = new Shop('Tokyo', 3, 24, 1.2);
  let dubai = new Shop('Dubai', 11, 28, 3.7);
  let paris = new Shop('Paris', 20, 38, 2.3);
  let lima = new Shop('Lima', 2 ,16, 4.6);

  console.log(allShops);


  function make() {
    let tableRow = document.createElement('tr');
    tableElem.appendChild(tableRow);
    let firstCell = document.createElement('td');
    tableRow.appendChild(firstCell);
    for (let i = 0; i < shopHours.length; i++) {
      let tableData = document.createElement('td');
      tableData.textContent = shopHours[i];
      tableRow.appendChild(tableData);
    }
}


function makeFooter() {
  let tableRow = document.createElement('tr');

  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'hourly total';
  tableRow.appendChild(tableHeader);

  let grandTotal = 0;

  for (let i = 0; i < shopHours.length; i++) {
    let hourlyTotal = 0;

    for (let j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].cookieNums[i];
    }

    let tdElement = document.createElement('th');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);

    grandTotal += hourlyTotal;
  }

  let totalElement = document.createElement('th');
  totalElement.textContent = grandTotal;
  tableRow.appendChild(totalElement);

  tableElem.appendChild(tableRow);
}
}
// #pragma: EXECUTABLE CODE

make();

seattle.rdmCookies();
seattle.render();

tokyo.rdmCookies();
tokyo.render();

dubai.rdmCookies();
dubai.render();

paris.rdmCookies();
paris.render();

lima.rdmCookies();
lima.render();

makeFooter();
