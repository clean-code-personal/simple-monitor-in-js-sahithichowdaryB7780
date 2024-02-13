const { expect } = require('chai');
const { batteryIsOk } = require('./bms-monitor');

describe('Battery Monitoring System', function () {
    it('should return true if all parameters are within range', function () {
        expect(batteryIsOk(25, 50, 0.5)).to.be.true;
    });

    it('should return false if temperature is out of range', function () {
        expect(batteryIsOk(60, 50, 0.5)).to.be.false;
    });

    it('should return false if SOC is out of range', function () {
        expect(batteryIsOk(25, 85, 0.5)).to.be.false;
    });

    it('should return false if charge rate is out of range', function () {
        expect(batteryIsOk(25, 50, 1)).to.be.false;
    });

});
