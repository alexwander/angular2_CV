import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	user = {};
  	constructor( 
  			private userService: UserService
  	) { }

  ngOnInit() {
  	this.user = this.userService.user;
  }

}
