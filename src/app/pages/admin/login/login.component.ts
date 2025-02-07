import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    userName: '',
    password: ''
  };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login({
      email: this.loginObj.userName, // Ajuste conforme o backend (se necessário)
      senha: this.loginObj.password
    }).subscribe({
      next: () => this.router.navigateByUrl('/tipo_servico'),
      error: () => this.errorMessage = 'Credenciais inválidas!'
    });
  }
}
