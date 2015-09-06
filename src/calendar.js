import {inject} from 'aurelia-framework';
import MealDataService from './dataServices/mealDataService';
import 'moment';

@inject(moment, MealDataService)
export class Calendar {
  constructor(moment, mealDataService) {
  	this.moment = moment;
  	this.dataService = mealDataService;
  }

  activate() {
  	let startDay = this.moment.day('sunday').format('LL');
  	let endDay = this.moment.day('saturday').format('LL');
  	
  	this.currentWeek = this.moment.week();
  	this.period = `${startDay} - ${endDay}`;

  	return this.dataService.getByWeek(this.currentWeek)
  		.then(meals => this.meals = meals);
  }
}