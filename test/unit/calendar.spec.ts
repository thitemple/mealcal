import {Calendar} from "../../src/calendar.ts";

describe("Calendar", () => {

  let sut;

  beforeEach(() => {
    sut = new Calendar();
  });

  it("shoud have a ", () => {
    expect(sut.currentWeek).toBeDefined();
  });

});
