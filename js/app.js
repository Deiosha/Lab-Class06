'use strict';

// Got from MDN docs
// function randomNumber(min, max) {
//   let randomCookiesThisHour = Math.floor(Math.random() * (max - min + 1) + min);
//   // console.log(randomCookiesThisHour);
//   this.cookiesPerHour.push(randomCookiesThisHour);

// }

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var referenceTable = document.getElementById('cookie-table');
var grandTotal = 0;
var hourlyTotalsArray = [];


let seattle = {
  locationName: 'Seattle',
  locationMin: 23,
  locationMax: 65,
  locationAvg: 6.3,
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
seattle.randomNumber();
console.log(seattle);






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




