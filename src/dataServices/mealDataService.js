export default class MealDataService {
	getByWeek(week) {
		let meals = {
				week: week,
				sunday: [
					{ title: 'Eggs', url: 'http://someurl.com', order: 100 },
					{ title: 'Greek Yogurt', url: 'http://someurl.com', order: 200 },
					{ title: 'Grilled chicken', url: 'http://someurl.com', order: 300 },
					{ title: 'Apples', url: '', order: 400 },
					{ title: 'Green salad', url: '', description: 'Some description', order: 500 },
				],
				monday: [
					{ title: 'Eggs', url: 'http://someurl.com', order: 100 },
					{ title: 'Grilled chicken', url: 'http://someurl.com', order: 300 },
					{ title: 'Green salad', url: '', description: 'Some description', order: 500 },
				],
				tuesday: [
					{ title: 'Greek Yogurt', url: 'http://someurl.com', order: 200 },
					{ title: 'Grilled chicken', url: 'http://someurl.com', order: 300 },
					{ title: 'Apples', url: '', order: 400 },
					{ title: 'Green salad', url: '', description: 'Some description', order: 500 },
				],
				wednesday: [
					{ title: 'Eggs', url: 'http://someurl.com', order: 100 },
					{ title: 'Greek Yogurt', url: 'http://someurl.com', order: 200 },
					{ title: 'Grilled chicken', url: 'http://someurl.com', order: 300 },
					{ title: 'Apples', url: '', order: 400 },
				],
				thursday: [
					{ title: 'Apples', url: '', order: 400 },
					{ title: 'Green salad', url: '', description: 'Some description', order: 500 },
				],
				friday: [
					{ title: 'Eggs', url: 'http://someurl.com', order: 100 },
					{ title: 'Greek Yogurt', url: 'http://someurl.com', order: 200 },
					{ title: 'Grilled chicken', url: 'http://someurl.com', order: 300 },
				],
				saturday: []
			};
		return new Promise(resolve => {
			resolve(meals);
		});
	}
}