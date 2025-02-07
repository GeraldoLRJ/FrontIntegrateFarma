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
        console.log('Token recebido:', token); // 📌 Debug para ver o token no console
        this.storeToken(token); // Armazena o token corretamente
        this.isAuthenticated.set(true);
      })
    );
  }

  private storeToken(token: string | undefined): void {
    if (!token) {
      console.error('Token inválido recebido do backend'); // Evita salvar undefined
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
}
