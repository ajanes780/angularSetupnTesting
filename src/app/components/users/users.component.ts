import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];

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
      },
    ];
    this.addUser({
      firstName: 'David',
      lastName: 'Jackson ',
      age: 99,
      address: {
        street: '9451621 mills Drive',
        city: 'Calgary',
        province: 'AB',
        postalCode: 'B0E1B0',
      },
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
