export default class MealDataService {
	getByWeek(year, week) {
		let meals = {
				year: year,
				week: week,
				days: [
					{
						weekDay: 'Sunday',
						meals: [
							{ title: 'Eggs', url: 'http://someurl.com', type: 'B' },
							{ title: 'Greek Yogurt', url: 'http://someurl.com', type: 'MS' },
							{ title: 'Grilled chicken', url: 'http://someurl.com', type: 'L' },
							{ title: 'Apples', url: '', type: 'AS' },
							{ title: 'Green salad', url: '', description: 'Some description', type: 'D' },
						]
					},
					{
						weekDay: 'Monday',
						meals: [
							{ title: 'Eggs', url: 'http://someurl.com', type: 'B' },
							{ title: 'Grilled chicken', url: 'http://someurl.com', type: 'L' },
							{ title: 'Green salad', url: '', description: 'Some description', type: 'D' },
						]
					},
					{
						weekDay: 'Tuesday',
						meals: [
							{ title: 'Greek Yogurt', url: 'http://someurl.com', type: 'MS' },
							{ title: 'Grilled chicken', url: 'http://someurl.com', type: 'L' },
							{ title: 'Apples', url: '', type: 'AS' },
							{ title: 'Green salad', url: '', description: 'Some description', type: 'D' },
						]
					},
					{
						weekDay: 'Wednesday',
						meals: [
							{ title: 'Eggs', url: 'http://someurl.com', type: 'B' },
							{ title: 'Greek Yogurt', url: 'http://someurl.com', type: 'MS' },
							{ title: 'Grilled chicken', url: 'http://someurl.com', type: 'L' },
							{ title: 'Apples', url: '', type: 'AS' },
						]
					},
					{
						weekDay: 'Thrusday',
						meals: [
							{ title: 'Apples', url: '', type: 'AS' },
							{ title: 'Green salad', url: '', description: 'Some description', type: 'D' },
						]
					},
					{
						weekDay: 'Friday',
						meals: [
							{ title: 'Eggs', url: 'http://someurl.com', type: 'B' },
							{ title: 'Greek Yogurt', url: 'http://someurl.com', type: 'MS' },
							{ title: 'Grilled chicken', url: 'http://someurl.com', type: 'L' },
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