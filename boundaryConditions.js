const temperatureBoundaryConditions = [
    { range: [-Infinity, 0], status: 'LOW_TEMPERATURE_BREACH' },
    { range: [0, 2.25], status: 'LOW_TEMPERATURE_WARNING' },
    { range: [2.25, 42.75], status: 'NORMAL' },
    { range: [42.75, 45], status: 'HIGH_TEMPERATURE_WARNING' },
    { range: [45, Infinity], status: 'HIGH_TEMPERATURE_BREACH' }
];

const socBoundaryConditions = [
    { range: [0, 20], status: 'LOW_SOC_BREACH' },
    { range: [20, 24], status: 'LOW_SOC_WARNING' },
    { range: [24, 76], status: 'NORMAL' },
    { range: [76, 80], status: 'HIGH_SOC_WARNING' },
    { range: [80, 100], status: 'HIGH_SOC_BREACH' }
];

const chargeRateBoundaryConditions = [
    { range: [0, 0.04], status: 'LOW_CHARGE_RATE_WARNING' },
    { range: [0.04, 0.76], status: 'NORMAL' },
    { range: [0.76, 1], status: 'HIGH_CHARGE_RATE_WARNING' }
];

module.exports = {
    temperatureBoundaryConditions,
    socBoundaryConditions,
    chargeRateBoundaryConditions
};
