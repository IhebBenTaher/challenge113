import { Component } from '@angular/core';

@Component({
  selector: 'app-homedoctor',
  standalone: true,
  imports: [],
  templateUrl: './homedoctor.component.html',
  styleUrl: './homedoctor.component.css'
})
export class HomedoctorComponent {
  a:string|null='';
  doctor:string='';
  constructor(){

    this.a=localStorage.getItem(''+localStorage.getItem(this.doctor));
  }
}
