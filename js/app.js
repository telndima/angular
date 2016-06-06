(function(){

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

	var app = angular.module('university', [ ]);	

	app.controller('GroupStudents', function(){
		this.students = staff;
	});

})();
