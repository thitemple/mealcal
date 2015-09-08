import {bindable} from 'aurelia-framework';

export class MealType {
	@bindable type = null;
	@bindable typeName = null;
	@bindable meals = null;

	filteredMeals(meals) {
		return meals.filter(meal => meal.type === this.type);
	}
}