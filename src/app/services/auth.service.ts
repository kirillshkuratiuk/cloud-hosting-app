import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

    constructor() {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        this.isAuthenticatedSubject.next(isLoggedIn);
    }

    login(username: string, password: string): boolean {
        if (username && password) {
            this.isAuthenticatedSubject.next(true);
            sessionStorage.setItem('isLoggedIn', 'true');
            return true;
        }
        return false;
    }

    logout(): void {
        this.isAuthenticatedSubject.next(false);
        sessionStorage.removeItem('isLoggedIn');
    }

    isLoggedIn(): boolean {
        return this.isAuthenticatedSubject.value;
    }
}