(function(){

	var app = angular.module('app', []);

	app.controller('GroupStudents', function(){
		this.students = staff;
	});
	
	var staff = [
		{
			name: 'John',
			age: '22'
		},
		{
			name: 'Ann',
			age: '20'
		}
	];

})();