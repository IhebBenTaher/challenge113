import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string='';
  password: string='';

  constructor(private location: Location) { }
  signup() {
    if(!localStorage.getItem(this.username)){
      localStorage.setItem(this.username,this.password);
      this.location.replaceState("/login");
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
