import MealsDay from '../../../src/resources/meals-day';

describe('MealsDay', () => {

	let sut;

	beforeEach(() => sut = new MealsDay());

	describe('bind', () => {

		beforeEach(() => {
			sut.meals = [
				{order: 100},
				{order: 200},
				{order: 200},
				{order: 300},
				{order: 300},
				{order: 300},
				{order: 400},
				{order: 400},
				{order: 400},
				{order: 400},
				{order: 500},
				{order: 500},
				{order: 500},
				{order: 500},
				{order: 500},
			];

			sut.bind();
		});

		it('should have one meal for breakfast', () => {
			//expect(sut.breakfast.length).toBe(1);
		});

	});

});