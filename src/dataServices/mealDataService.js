export default class MealDataService {
	getByWeek(week) {
		let meals = {
				week: week,
				days: [
					{
						weekDay: 'Sunday',
						meals: [
							{ title: 'Eggs', url: 'http://someurl.com', order: 100 },
							{ title: 'Greek Yogurt', url: 'http://someurl.com', order: 200 },
							{ title: 'Grilled chicken', url: 'http://someurl.com', order: 300 },
							{ title: 'Apples', url: '', order: 400 },
							{ title: 'Green salad', url: '', description: 'Some description', order: 500 },
						]
					},
					{
						weekDay: 'Monday',
						meals: [
							{ title: 'Eggs', url: 'http://someurl.com', order: 100 },
							{ title: 'Grilled chicken', url: 'http://someurl.com', order: 300 },
							{ title: 'Green salad', url: '', description: 'Some description', order: 500 },
						]
					},
					{
						weekDay: 'Tuesday',
						meals: [
							{ title: 'Greek Yogurt', url: 'http://someurl.com', order: 200 },
							{ title: 'Grilled chicken', url: 'http://someurl.com', order: 300 },
							{ title: 'Apples', url: '', order: 400 },
							{ title: 'Green salad', url: '', description: 'Some description', order: 500 },
						]
					},
					{
						weekDay: 'Wednesday',
						meals: [
							{ title: 'Eggs', url: 'http://someurl.com', order: 100 },
							{ title: 'Greek Yogurt', url: 'http://someurl.com', order: 200 },
							{ title: 'Grilled chicken', url: 'http://someurl.com', order: 300 },
							{ title: 'Apples', url: '', order: 400 },
						]
					},
					{
						weekDay: 'Thrusday',
						meals: [
							{ title: 'Apples', url: '', order: 400 },
							{ title: 'Green salad', url: '', description: 'Some description', order: 500 },
						]
					},
					{
						weekDay: 'Friday',
						meals: [
							{ title: 'Eggs', url: 'http://someurl.com', order: 100 },
							{ title: 'Greek Yogurt', url: 'http://someurl.com', order: 200 },
							{ title: 'Grilled chicken', url: 'http://someurl.com', order: 300 },
						]
					},
					{
						weekDay: 'Saturday',
						meals: [
						]
					}
				]
			};
		return new Promise(resolve => {
			resolve(meals);
		});
	}
}