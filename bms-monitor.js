const { expect } = require('chai');

//To check if given input value in range,returns true if it passes
function inRange(inputValue,min,max) {
    return (inputValue > min && inputValue < max) ? true : false;

}


function batteryIsOk(inputTemperature, inputSoc, inputCharge_Rate) {
    let temperatureValue = inRange(inputTemperature,0,45);
    let socValue = inRange(inputSoc,20,80);
    let charge_RateValue = inRange(inputCharge_Rate,0,0.8);
    const parameters = [temperatureValue, socValue, charge_RateValue];
    let isBatteryOk = parameters.every(value => value);
    return isBatteryOk;
}

module.exports = { batteryIsOk };
