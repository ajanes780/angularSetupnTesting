import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'Rob',
        lastName: 'Mathews',
        age: 45,
        address: {
          street: '516512 Fowens Drive',
          city: 'Baddeck',
          province: 'Nova Scotia',
          postalCode: 'B0E1B0',
        },

        isActive: true,

        registered: new Date('01/02/2018 08:30:00'),
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 91,
        address: {
          street: ' 5651 Crown Drive',
          city: 'Toronto',
          province: 'Ont',
          postalCode: 'B0E1B0',
        },

        isActive: false,

        registered: new Date('05/17/2019 08:30:00'),
      },
      {
        firstName: 'Tristan',
        lastName: 'Dumbey',
        age: 25,
        address: {
          street: '9451621 mills Drive',
          city: 'Quebec',
          province: 'QC',
          postalCode: 'B0E1B0',
        },

        isActive: true,

        registered: new Date('01/11/2021 08:30:00'),
      },
    ];
    // this.showExtended = false;
    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  fireEvent(e) {
    this.addUser({ firstName: 'Bob', lastName: 'Vela', isActive: true });
    this.showExtended = !this.showExtended;
  }
}
