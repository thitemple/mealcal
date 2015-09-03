import {Calendar} from "../../src/calendar";

describe('Calendar', () => {

  let sut;

  beforeEach(() => {
    sut = new Calendar();
  });

  it('shoud have a currentWeek', () => {
    expect(sut.currentWeek).toBeDefined();
  });

});
