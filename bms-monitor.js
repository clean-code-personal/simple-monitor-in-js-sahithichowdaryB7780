const { expect } = require('chai');
const { temperatureBoundaryConditions, socBoundaryConditions, chargeRateBoundaryConditions } = require('./boundaryConditions');
const { anomalyMessages } = require('./anomalyLanguages');

function getStatus(parameter, inputValue, boundaryConditions) {
    const matchedRange = boundaryConditions.find(range => inputValue >= range.range[0] && inputValue <= range.range[1]);
    return matchedRange ? matchedRange.status : 'OUT_OF_RANGE';
}

function getAnomalyMessage(status, language) {
    const message = anomalyMessages[status];
    return message ? message[language] : '';
}

function batteryIsOk(inputTemperature, inputSoc, inputChargeRate, language) {
    const temperatureStatus = getStatus('temperature', inputTemperature, temperatureBoundaryConditions);
    const socStatus = getStatus('soc', inputSoc, socBoundaryConditions);
    const chargeRateStatus = getStatus('chargeRate', inputChargeRate, chargeRateBoundaryConditions);

    const temperatureMessage = getAnomalyMessage(temperatureStatus, language);
    const socMessage = getAnomalyMessage(socStatus, language);
    const chargeRateMessage = getAnomalyMessage(chargeRateStatus, language);
    const parameters = [temperatureStatus, socStatus, chargeRateStatus];
    let isBatteryOk = parameters.every(value => value === 'NORMAL');

    return {
        temperature: temperatureStatus,
        soc: socStatus,
        chargeRate: chargeRateStatus,
        temperatureMessage,
        socMessage,
        chargeRateMessage,
        isBatteryOk
    };
}

module.exports = { batteryIsOk };


