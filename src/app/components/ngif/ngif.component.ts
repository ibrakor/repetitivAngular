import {Component} from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {
  show: boolean = true;
  a: boolean = true;
  b: boolean = false;
  showActions: boolean = true;
  user = {id: 1, name: "Ramesh"};
  users = [{
    id: 100, firstName: "Ramesh", lastName: "Fadatare", emailId: "ramesh@gmail.com"
  }, {
    id: 101,
    firstName: "Tony",
    lastName: "Stark",
    emailId: "tony@gmail.com"
  }, {id: 100, firstName: "Tom", lastName: "Cruise", emailId: "tom@gmail.com"}]
}

