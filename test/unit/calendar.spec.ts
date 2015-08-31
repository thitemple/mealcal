import {Calendar} from "../../src/calendar";

describe('Calendar', () => {

  let sut;

  beforeEach(() => {
    sut = new Calendar();
  });

  it('shoud have a ', () => {
    expect(sut.currentWeek).toBeDefined();
  });

});
