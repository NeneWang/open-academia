import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {
  // @ViewChild('sidenav') sidenav!: MatSidenav;
  showSidebar = false;

  toggleDrawer() {
    console.log("toggleDrawer");
    // this.sidenav.toggle();
    this.showSidebar = !this.showSidebar;
    console.log(this.showSidebar)
  }

}
