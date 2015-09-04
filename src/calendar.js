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
  	
  	this.currentWeek = this.moment.week();
  	this.period = `${this.moment.day('sunday').format('LL')} - ${this.moment.day('saturday').format('LL')}`;

  	return this.dataService.getByWeek(this.currentWeek)
  		.then(meals => this.meals = meals);
  }
}