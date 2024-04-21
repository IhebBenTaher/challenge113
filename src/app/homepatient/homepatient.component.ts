import { Component } from '@angular/core';

@Component({
  selector: 'app-homepatient',
  standalone: true,
  imports: [],
  templateUrl: './homepatient.component.html',
  styleUrl: './homepatient.component.css'
})
export class HomepatientComponent {
  doctor: string='';
  notif: string='';

  constructor() { }
  notify() {
    if(localStorage.getItem("notif"+this.doctor)){
      localStorage.setItem("notif"+this.doctor,localStorage.getItem("notif"+this.doctor)+this.notif);
    }
    else{
      localStorage.setItem("notif"+this.doctor,"notif"+this.notif);
    }

}}
