const { expect } = require('chai');

//To check if temp in range,returns true if it passes
function temperatureInRange(inputTemperature) {
    return (inputTemperature > 0 && inputTemperature < 45) ? true : false;

}
//To check if soc in range,returns true if it passes
function socInRange(inputSoc) {
    return (inputSoc > 20 && inputSoc < 80) ? true : false;
}
//To check if charge_rate in range, returns true if it passes
function charge_rateInRange(inputCharge_Rate) {
    return (inputCharge_Rate > 0 && inputCharge_Rate < 0.8) ? true : false;
}


function batteryIsOk(inputTemperature, inputSoc, inputCharge_Rate) {
    let temperatureValue = temperatureInRange(inputTemperature);
    let socValue = socInRange(inputSoc);
    let charge_RateValue = charge_rateInRange(inputCharge_Rate);
    const parameters = [temperatureValue, socValue, charge_RateValue];
    let isBatteryOk = parameters.every(value => value);
    return isBatteryOk;
}

module.exports = { batteryIsOk };