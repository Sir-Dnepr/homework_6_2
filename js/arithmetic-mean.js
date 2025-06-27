"use strict";

const dataByCustomer = [
    null,
    3500,
    undefined,
    90011112222333344440,
    "71",
    {14: '15'},
    Symbol('uniqueId'),
    ['3', 1, 4],
    0,
    0,
    0,
    0,
    -90011112222333344440,
    function (){},
    -12000,
    NaN,
    69990
];

function getArithmeticMean(data) {
    let baseValue = 0,
        numberOfProcessedValues = 0;

    for (const item of data) {
        if (typeof item === 'number' && !isNaN(item)) {
            baseValue += item;
            numberOfProcessedValues++;
        }
    }

    return numberOfProcessedValues ? baseValue/numberOfProcessedValues : 0;
}

alert(getArithmeticMean(dataByCustomer));
