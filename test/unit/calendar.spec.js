import {Calendar} from "../../src/calendar";
import 'moment';

describe('Calendar', () => {

  let sut;
  let moment;
  let mealDataService;
  let weekNumber = 1;

  beforeEach(() => {
  	
  	moment = function() {
  		return {
  			week: function() { return weekNumber; }
  		};
  	};

  	mealDataService = {
  		getByWeek: function() { }
  	};

  	spyOn(mealDataService, 'getByWeek').and.returnValue([]);

    sut = new Calendar(moment, mealDataService);
  });

  describe('activate', () => {

  	beforeEach(() => sut.activate());

  	it('shoud have a currentWeek', () => {
    	expect(sut.currentWeek).toBeDefined();
  	});

  	it('should load return meals for the week', () => {

  		expect(sut.meals).toBeDefined();
  		expect(mealDataService.getByWeek).toHaveBeenCalledWith(weekNumber);

  	});

  });

});
