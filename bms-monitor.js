const { expect } = require('chai');
const { temperatureBoundaryConditions, socBoundaryConditions, chargeRateBoundaryConditions } = require('./boundaryConditions');
const { anomalyMessages } = require('./anomalyLanguages');

function getStatus(parameter, inputValue, boundaryConditions) {
    const matchedRange = boundaryConditions.find(range => inputValue >= range.range[0] && inputValue <= range.range[1]);
    return matchedRange ? matchedRange.status : 'OUT_OF_RANGE';
}

function getAnomalyMessage(status, language) {
    const message = anomalyMessages[status];
    return message ? message[language] || message['en'] : '';
}



function batteryIsOk(inputTemperature, inputSoc, inputChargeRate, language) {
    const temperatureStatus = getStatus('temperature', inputTemperature, temperatureBoundaryConditions);
    const socStatus = getStatus('soc', inputSoc, socBoundaryConditions);
    const chargeRateStatus = getStatus('chargeRate', inputChargeRate, chargeRateBoundaryConditions);

    const temperatureMessage = getAnomalyMessage(temperatureStatus, language);
    console.log('Temperature:',temperatureMessage);
    const socMessage = getAnomalyMessage(socStatus, language);
    console.log('SOC:',socMessage);
    const chargeRateMessage = getAnomalyMessage(chargeRateStatus, language);
    console.log('chargeRate:',chargeRateMessage);
    const parameters = [temperatureStatus, socStatus, chargeRateStatus];
    let isBatteryOk = parameters.every(value => value === 'NORMAL');

    return {
        isBatteryOk
    };
}

module.exports = { batteryIsOk };


