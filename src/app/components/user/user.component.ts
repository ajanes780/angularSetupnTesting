import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.style.scss'],
})
export class UserComponent {
  // properties
  firstName = 'John';
  lastName = ' Doe';
  age = 40;

  //Methods that are run at the time the instance is created
  constructor() {
    this.sayHello();
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }
}
