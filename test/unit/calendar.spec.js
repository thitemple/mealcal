import {Calendar} from "../../src/calendar";
import 'moment';

describe('Calendar', () => {

  let sut;
  let moment;
  let mealDataService;
  let weekNumber = 1;

  beforeEach(() => {
  	
  	moment = {
  		day: function(){ return { format: function() {} }; },
      week: function() { return weekNumber; }
  	};

    let promise = {
      then: function(cb) { cb([]); }
    };

  	mealDataService = {
  		getByWeek: function() { }
  	};

  	spyOn(mealDataService, 'getByWeek').and.returnValue(promise);

    sut = new Calendar(moment, mealDataService);
  });

  describe('activate', () => {

  	beforeEach(() => sut.activate());

  	it('shoud have a currentWeek', () => {
    	expect(sut.currentWeek).toBeDefined();
  	});

    it('should have a period', () => {
      expect(sut.period).toBeDefined();
    });

  	it('should load return meals for the week', () => {

  		expect(sut.meals).toBeDefined();
  		expect(mealDataService.getByWeek).toHaveBeenCalledWith(weekNumber);

  	});

  });

});
