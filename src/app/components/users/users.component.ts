import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  hide: boolean = true;
  showUserForm: boolean = false;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'Rob',
        lastName: 'Mathews',
        email: 'rob@gmail.com',
        hide: true,
        isActive: true,

        registered: new Date('01/02/2018 08:30:00'),
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@gmail.com',

        isActive: false,
        hide: true,

        registered: new Date('05/17/2019 08:30:00'),
      },
      {
        firstName: 'Tristan',
        lastName: 'Dumbey',
        email: 'tristan@yahoo.com',

        isActive: true,
        hide: true,

        registered: new Date('01/11/2021 08:30:00'),
      },
    ];
    // this.showExtended = false;
    this.loaded = true;
  }

  // addUser(user: User) {
  //   this.users.unshift(this.user);
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   };
  // }
  // fireEvent(e) {
  //   this.addUser({ firstName: 'Bob', lastName: 'Vela', isActive: true });
  //   this.showExtended = !this.showExtended;
  // }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    e.preventDefault();
    this.users.unshift(this.user);
    this.user.isActive = true;
    this.user.registered = new Date();
  }

  fireEvent(e) {
    console.log(e.target.value);
  }
}
