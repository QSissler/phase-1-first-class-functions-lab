const returnFirstTwoDrivers = function (arrayOfNames){
    return [arrayOfNames[0], arrayOfNames[1]];
}

const returnLastTwoDrivers = function (arrayOfNames){
    return arrayOfNames.slice(-2);
}
const selectingDrivers = [
returnFirstTwoDrivers, 
returnLastTwoDrivers
];

function createFareMultiplier(int){
    return function(fare){
       return (int * fare);
    }
}

console.log(createFareMultiplier(10)(2))

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(array, funct){
    return funct(array);
}