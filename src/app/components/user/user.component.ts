import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.style.scss'],
})
export class UserComponent implements OnInit {
  // properties
  user: User;

  //Methods that are run at the time the instance is created
  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: 'Rob',
      lastName: 'Mathews',
      age: 45,
      address: {
        street: 'Fowens Drive',
        city: 'Baddeck',
        province: 'Nova Scotia',
        postalCode: 'B0E1B0',
      },
    };
  }
}
