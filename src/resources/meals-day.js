import {bindable} from 'aurelia-framework';

export default class MealsDay {
	@bindable meals = [];

	bind() {
		this.breakfast = this.meals.filter(x => x.order < 200);
		this.morningSnack = this.meals.filter(x => x.order >= 200 && x.order < 300);
		this.lunch = this.meals.filter(x => x.order >= 300 && x.order < 400);
		this.afternoonSnack = this.meals.filter(x => x.order >= 400 && x.order < 500);
		this.dinner = this.meals.filter(x => x.order >= 500);
	}
}