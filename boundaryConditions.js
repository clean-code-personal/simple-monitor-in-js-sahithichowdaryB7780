const { temperatureMargin, socMargin, chargeRateMargin } = require('./tolerance.js');
const { temperatureLimits, socLimits, chargeRateLimits } = require('./limits');
const temperatureBoundaryConditions = [
    { range: [-Infinity, temperatureLimits.min ], status: 'LOW_TEMPERATURE_BREACH' },
    { range: [temperatureLimits.min, temperatureLimits.min + temperatureMargin], status: 'LOW_TEMPERATURE_WARNING' },
    { range: [temperatureLimits.min + temperatureMargin, temperatureLimits.max - temperatureMargin], status: 'NORMAL' },
    { range: [temperatureLimits.max - temperatureMargin, temperatureLimits.max], status: 'HIGH_TEMPERATURE_WARNING' },
    { range: [temperatureLimits.max, Infinity], status: 'HIGH_TEMPERATURE_BREACH' }
];

const socBoundaryConditions = [
    { range: [0, socLimits.min ], status: 'LOW_SOC_BREACH' },
    { range: [socLimits.min, socLimits.min + socMargin], status: 'LOW_SOC_WARNING' },
    { range: [socLimits.min + socMargin, socLimits.max - socMargin], status: 'NORMAL' },
    { range: [socLimits.max - socMargin, socLimits.max], status: 'HIGH_SOC_WARNING' },
    { range: [socLimits.max, 100], status: 'HIGH_SOC_BREACH' }
];

const chargeRateBoundaryConditions = [
    { range: [chargeRateLimits.min, chargeRateLimits.min + chargeRateMargin], status: 'LOW_CHARGE_RATE_WARNING' },
    { range: [chargeRateLimits.min + chargeRateMargin, chargeRateLimits.max - chargeRateMargin], status: 'NORMAL' },
    { range: [chargeRateLimits.max - chargeRateMargin, chargeRateLimits.max], status: 'HIGH_CHARGE_RATE_WARNING' }
];

module.exports = {
    temperatureBoundaryConditions,
    socBoundaryConditions,
    chargeRateBoundaryConditions
};
