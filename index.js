// Code your solution in this file!

//different drivers array
const driversArray = ["Noela", "Jane" , "Nathan" , "John" , "Abby"];


//anonymous function to first two drivers
const returnFirstTwoDrivers = function (driversArray) {
    return driversArray.slice(0, 2);
}


// anonymous function to last two drivers
const returnLastTwoDrivers = function (driversArray) {
    return driversArray.slice(-2);
}

//selectingDrivers function and invoke from array
const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

//multiply vale with created multiplier
const createFareMultiplier= function (integerArgument) {
    return function(fare) {
          return fare * integerArgument;
    }
}

//doubles the fare
const fareDoubler=createFareMultiplier(2);

//triples the fare
const fareTripler=createFareMultiplier(3);

//differentDriversArray function
const selectDifferentDrivers= function (driversArray, differentDriversArray){
    return differentDriversArray(driversArray);
}
