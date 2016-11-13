import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
	user = {};
  	constructor( 
  			private userService: UserService
  	) { }

  ngOnInit() {
  	this.user = this.userService.user;
  }

}
