import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(private router: Router) { }

  goToUser(userId: string) {
    if (!userId) { return; }
    this.router.navigate(['/user', userId]);
  }

}
