import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'auth_token';
  isAuthenticated = signal(this.hasToken());

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; senha: string }) {
    return this.http.post<string>(Constant.API_END_POINT + Constant.METHODS.USUARIO_ADMIN, credentials, { responseType: 'text' as 'json' }).pipe(
      tap(token => {
        this.storeToken(token);
        this.isAuthenticated.set(true);
      })
    );
  }

  private storeToken(token: string | undefined): void {
    if (!token) {
      console.error('Token inválido recebido do backend');
      return;
    }
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticated.set(false);
  }

  decodeToken(): any {
    const token = this.getToken();
    if (!token) return null;

    try {
      const base64Url = token.split('.')[1]; 
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload); 
    } catch (error) {
      console.error('Erro ao decodificar JWT:', error);
      return null;
    }
  }
}
