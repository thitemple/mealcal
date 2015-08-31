System.register(["../../src/calendar"], function(exports_1) {
    var calendar_1;
    return {
        setters:[
            function (calendar_1_1) {
                calendar_1 = calendar_1_1;
            }],
        execute: function() {
            describe('Calendar', function () {
                var sut;
                beforeEach(function () {
                    sut = new calendar_1.Calendar();
                });
                it('shoud have a ', function () {
                    expect(sut.currentWeek).toBeDefined();
                });
            });
        }
    }
});
