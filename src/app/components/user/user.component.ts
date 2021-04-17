import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.style.scss'],
})
export class UserComponent {
  // properties
  firstName: string;
  lastName: string;
  age: number;
  address;

  //Methods that are run at the time the instance is created
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Green Wood';
    this.age = 34;
    this.address = {
      street: '50 main st',
      city: 'Halifax',
      province: 'Nova Scotia',
    };
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }
}
