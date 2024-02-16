const { expect } = require('chai');
const { batteryIsOk } = require('./bms-monitor');

describe('batteryIsOk function', function () {
    it('should return true if all parameters are within normal range', function () {
        const result = batteryIsOk(30, 70, 0.5, 'en');
        expect(result.isBatteryOk).to.be.true;

    });

    it('should return false if temperature is out of normal range', function () {
        const result = batteryIsOk(50, 70, 0.5, 'en');
        expect(result.isBatteryOk).to.be.false;

    });

    it('should return false if SoC is out of normal range', function () {
        const result = batteryIsOk(30, 10, 0.5, 'en');
        expect(result.isBatteryOk).to.be.false;

    });

    it('should return false if charge rate is out of normal range', function () {
        const result = batteryIsOk(30, 70, 1.0, 'en');
        expect(result.isBatteryOk).to.be.false;

    });

    it('should return anomaly messages in German', function () {
        const result = batteryIsOk(50, 10, 1.0, 'ge');
        expect(result.isBatteryOk).to.be.false;

    });
});

