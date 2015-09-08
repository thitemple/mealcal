import {inject} from 'aurelia-framework';
import MealDataService from './dataServices/mealDataService';
import 'moment';

@inject(moment, MealDataService)
export class Calendar {
  constructor(moment, mealDataService) {
  	this.moment = moment;
  	this.dataService = mealDataService;
    
    this.currentYear = this.moment.year();
    this.currentWeek = this.moment.week();
    this.updateCurrentPeriod();
    this.updatePreviewNext();
  }

  updateCurrentPeriod() {
    let currentWeekDate = this.moment.year(this.currentYear).week(this.currentWeek);
    let startDay = currentWeekDate.day('sunday').format('LL');
    let endDay = currentWeekDate.day('sunday').format('LL');
    this.period = `${startDay} - ${endDay}`;
  }

  updatePreviewNext() {
    let currentWeekDate = this.moment.year(this.currentYear).week(this.currentWeek);
    
    this.previewsWeek = currentWeekDate.add(-1, 'weeks').week();
    this.previewsYear = currentWeekDate.add(-1, 'weeks').year();

    this.nextWeek = currentWeekDate.add(1, 'weeks').week();
    this.nextYear = currentWeekDate.add(1, 'weeks').year();
  }

  activate() {
  	return this.dataService.getByWeek(this.currentYear, this.currentWeek)
  		.then(meals => this.meals = meals);
  }

  changeWeek(year, week) {
    this.currentYear = year;
    this.currentWeek = week;
    this.updateCurrentPeriod();
    this.updatePreviewNext();
    console.log(`${year}-${week}`);
  }
}