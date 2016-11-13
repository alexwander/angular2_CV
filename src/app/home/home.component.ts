import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	user = {};
  	constructor( 
  			private userService: UserService
  	) { }

  ngOnInit() {
  	this.user = this.userService.user;
  }

}