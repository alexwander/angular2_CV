import { Injectable } from '@angular/core'

@Injectable()
export class UserService {
	
	user = {

			name:'katrina',
			lastname: 'hitchcock',
			birthdate: '28/2/82',
			description: 'I am a Computer Science student with experience in Agile methodologies such as UP, Scrum and XP. I have worked with Software Development using Java and Web Development using C# ASP.NET MVC, Node.js and Angular 2. I am mainly interested in developing skills in Web Development.',

			homedescription: 'this is home descirption',
	  	 	pictures:{
		  	 		main: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
		  	},

		  	contact: {

		  		email: 'katrina.hitchcock@gmail.com',
		  		phone: '+45 XXXX XXXX',
		  		city: 'Copenhagen, Denmark', 

		  	},

	  	 	social: {
	  	 		linkedin: 'LinkedIn',
	  	 	},
	  	 	skills: [
		  	 	{ name: 'HTML', rank: 4},
		  	 	{ name: 'CSS', rank: 4},
		  	 	{ name: 'JavaScipt', rank: 4},
		  	 	{ name: 'NodeJS', rank: 2},
		  	 	{ name: 'Angular2', rank: 2},	
		  	 	{ name: 'Java', rank: 3},	  			  	 			  	 		
	  	 	]
	};

	constructor (){ }

}
	