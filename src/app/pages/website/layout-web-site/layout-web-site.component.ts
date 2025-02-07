import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-layout-web-site',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout-web-site.component.html',
  styleUrl: './layout-web-site.component.css'
})
export class LayoutWebSiteComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
