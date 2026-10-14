import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  studentName: string = 'Shreyash';
  courseName: string = 'Angular';
  imageUrl: string = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';
  isDisabled: boolean = false;

  changeName(): void {
    this.studentName = 'Rahul';
  }
}