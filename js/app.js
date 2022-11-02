'use strict';

// Got from MDN docs
// function randomNumber(min, max) {
//   let randomCookiesThisHour = Math.floor(Math.random() * (max - min + 1) + min);

let shophours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12am',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
];

let allShops = [];
let tableElem = document.getElementById('Sales-Table');

// from MDN
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Shop (locationName,locationMin, locationMax, locationAvg){
  this.locationName = locationName;
  this.locationMin = locationMin;
  this.locationMax = locationMax;
  this.locationAvg = locationAvg;
  customersPerHour: [];
  cookiesPerHour: [];

  allShops.push(this);
}

Shop.prototype.getCookienum = function() {
  for (let i = 0; i < shopHours.length; i++) {
    let customerNum = randomCustomer(this.locationMin, this.locationMax);
    let cookieNum = Math.round(customerNum * this.locationAvg);
    this.cookiesPerHour.push(cookieNum);
    this.customersPerHour += cookieNum;
  }
} ;


// DOM MANIPULATION 

let shopSection = document.getElementById('shopProfiles');

console.dir(shopSection);


    // ** STEP 2: CREATE THE ELEMENT

    let articleElem = document.createElement('article');

     // ** STEP 3: GIVE CONTEXT IF NECESSARY
    // skip for articleElem

    // ** STEP 4: ADD IT TO THE DOM ---> parent.appendChild(child)

    shopSection.appendChild(articleElem);

    //create h2 element

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    //create unordered list

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < shopHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${shopHours[i]}: ${this.cookies[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    // Create a table

    // let tableElem = document.createElement('tr');
    // articleElem.appendChild(tableElm);

    // let tr1Elem = document.createElement('tr');
    // tableElem.appendChild(tr1Elem);

    // let th1Elem = document.createElement('th');
    // th1Elem.textContent = '6am';
    // tr1Elem.appendChild(th1Elem);

    // let tr2Elem = document.createElement('tr');
    // tableElem.appendChild(tr2Elem);

    // let th2Elem = document.createElement('th');
    // th2Elem.textContent = '7am';
    // tr1Elem.appendChild(th2Elem);


    let seattle = {
      locationName: 'Seattle',
      locationMin: 23,
      locationMax: 65,
      locationAvg: 6.3,
      cust: [],
      cookies: [],

      render: function () {
        this.cookies = randomCookie(this.cust, this.avgCookieSale);

    //   randomNumber: function () {
    //     for (let i = 0; i < 14; i++) {
    //       let randomCookiesThisHour = Math.floor(Math.random() * (this.locationMax - this.locationMin + 1) + this.locationMin);
    //       // console.log(randomCookiesThisHour);
    //       this.cookiesPerHour.push(randomCookiesThisHour);
    //     }
    //   }
    // }
    seattle.randomNumber();
    console.log(seattle);

    seattle.render();{
      this.cookiesPerHour = randomCookiesThisHour(this.customersPerHour, this.locationAvg);

      let articleElem = document.createElement('articleElem');

      let h2Elem = document.createElement('h2'); 
      h2Elem.textContent = this.location; 
      articleElem.appendChild(h2Elem);

      let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for (let i = 0; i < shopHours.length; i++) {
      let liElem = document.createElement('li'); // <li></li>
      liElem.textContent = `${shopHours[i]}: ${this.cookies[i]} cookies`;
      ulElem.appendChild(liElem);
    }
  }
  seattle.cust = randomCust(seattle.locationMin, seattle.locationMax);
seattleShop.render();



let tokyo = {
  locationName: 'Tokyo',
  locationMin: 3,
  locationMax: 24,
  locationAvg: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  randomNumber: function () {
    for (let i = 0; i < 14; i++) {
      let randomCookiesThisHour = Math.floor(Math.random() * (this.locationMax - this.locationMin + 1) + this.locationMin);
      // console.log(randomCookiesThisHour);
      this.cookiesPerHour.push(randomCookiesThisHour);
    }
  }
}
tokyo.randomNumber();
console.log(tokyo);

// randomNumber(tokyo.locationMin, tokyo.locationMax);



let dubai = {
  locationName: 'Dubai',
  locationMin: 11,
  locationMax: 28,
  locationAvg: 3.7,
  customersPerHour: [],
  cookiesPerHour:[],
  randomNumber: function () {
    for (let i = 0; i < 14; i++) {
      let randomCookiesThisHour = Math.floor(Math.random() * (this.locationMax - this.locationMin + 1) + this.locationMin);
      // console.log(randomCookiesThisHour);
      this.cookiesPerHour.push(randomCookiesThisHour);
    }
  }
}
dubai.randomNumber();
console.log(dubai);

// randomNumber(dubai.locationMin, dubai.locationMax);


let paris = {
  locationName: 'Paris',
  locationMin: 20,
  locationMax: 38,
  locationAvg: 2.3,
  customersPerHour: [],
  cookiesPerHour:[],
  randomNumber: function () {
    for (let i = 0; i < 14; i++) {
      let randomCookiesThisHour = Math.floor(Math.random() * (this.locationMax - this.locationMin + 1) + this.locationMin);
      // console.log(randomCookiesThisHour);
      this.cookiesPerHour.push(randomCookiesThisHour);
    }
  }
}
paris.randomNumber();
console.log(paris);

// randomNumber(paris.locationMin, paris.locationMax);

let lima = {
  locationName: 'Lima',
  locationMin: 2,
  locationMax: 16,
  locationAvg: 4.6,
  customersPerHour: [],
  cookiesPerHour:[],
  randomNumber: function () {
    for (let i = 0; i < 14; i++) {
      let randomCookiesThisHour = Math.floor(Math.random() * (this.locationMax - this.locationMin + 1) + this.locationMin);
      // console.log(randomCookiesThisHour);
      this.cookiesPerHour.push(randomCookiesThisHour);
    }
  }
}
lima.randomNumber();
console.log(lima);

// randomNumber(lima.locationMin, lima.locationMax);




