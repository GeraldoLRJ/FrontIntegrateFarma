import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-web-site',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout-web-site.component.html',
  styleUrl: './layout-web-site.component.css'
})
export class LayoutWebSiteComponent {

}
