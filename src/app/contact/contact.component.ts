import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
	user = {};
  	constructor( 
  			private userService: UserService
  	) { }

  ngOnInit() {
  	this.user = this.userService.user;
  }

}
