import {MealsDay} from '../../../src/resources/meals-day';
import {BehaviorInstance} from 'aurelia-templating';
import {Container} from 'aurelia-dependency-injection';

describe('MealsDay', () => {

	let sut;

	beforeEach(() => {
		new Container().makeGlobal();
		sut = BehaviorInstance.createForUnitTest(MealsDay);
	});

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
		});

		it('should have one meal for breakfast', done => {
			setTimeout(() => {
				expect(sut.breakfast.length).toBe(1);
				done();
			});
		});

		it('should have two meals for the first snack', done => {
			setTimeout(() => {
				expect(sut.morningSnack.length).toBe(2);
				done();
			});
		});

		it('should have three meals for lunch', done => {
			setTimeout(() => {
				expect(sut.lunch.length).toBe(3);
				done();
			});
		});

		it('should have four meals for the afternoon snack', done => {
			setTimeout(() => {
				expect(sut.afternoonSnack.length).toBe(4);
				done();
			});
		});

		it('should have five meals for dinner', done => {
			setTimeout(() => {
				expect(sut.dinner.length).toBe(5);
				done();
			});
		});

	});

});