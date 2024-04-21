import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string='';
  password: string='';

  constructor() {}

  login() {
    if(!localStorage.getItem(this.username)){
      localStorage.setItem(this.username,this.password);
    }
    // this.authService.signup(this.username, this.password)
    //   .subscribe(
    //     success => {
    //       // Redirect to dashboard or perform other actions on successful login
    //     },
    //     error => {
    //       // Handle login error
    //     }
    //   );
  }
}
