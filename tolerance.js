const { temperatureLimits, socLimits, chargeRateLimits } = require('./limits');
const tolerance = 0.04;

function calculateMargin(tolerance, temperatureMax, socMax, chargeRateMax) {
    const temperatureMargin = temperatureMax * tolerance;
    const socMargin = socMax * tolerance;
    const chargeRateMargin = chargeRateMax * tolerance;

    return { temperatureMargin, socMargin, chargeRateMargin };
}

const { temperatureMargin, socMargin, chargeRateMargin } = calculateMargin(tolerance, temperatureLimits.max, socLimits.max, chargeRateLimits.max);

module.exports = { temperatureMargin, socMargin, chargeRateMargin };
