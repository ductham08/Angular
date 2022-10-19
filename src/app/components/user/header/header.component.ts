import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  active = false;

  ngOnInit(): void {
    const btn_menu = document.querySelector(".btn_menu");
    const show_menu = document.querySelector(".bg_color");
    
    btn_menu?.addEventListener("click", () => {
      this.active = !this.active;
    })

    show_menu?.addEventListener("click", () => {
      this.active = !this.active;
    })



    

  }

  

}
