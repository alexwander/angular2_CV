import { Injectable } from '@angular/core'

@Injectable()
export class UserService {
	
	user = {

			name:'katrina',
			lastname: 'hitchcock',
			birthdate: '28/2/82',
			description: 'I am a Computer Science student with experience in Agile methodologies such as UP, Scrum and XP. I have worked with Software Development using Java and Web Development using C# ASP.NET MVC, Node.js and Angular 2. I am mainly interested in developing skills in Web Development.',

	  	 	pictures:{
		  	 		main: 'http://placehold.it/350x150',
		  	},

	  	 	social: {
	  	 		twitter: 'LinkedIn',
	  	 	},
	  	 	skills: [
		  	 	{ name: 'HTML', rank: 5},
		  	 	{ name: 'CSS', rank: 5},
		  	 	{ name: 'JavaScipt', rank: 5},
		  	 	{ name: 'NodeJS', rank: 3},
		  	 	{ name: 'Angular2', rank: 2},		  			  	 			  	 		
	  	 	]
	};

	constructor (){ }

}
	