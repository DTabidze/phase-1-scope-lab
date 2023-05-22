// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    globalThis.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'john';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'tom'
}