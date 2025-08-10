import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

declare type LoginForm = {
    login: FormControl<string | null>;
    password: FormControl<string | null>;
};

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    standalone: false,
})
export class LoginFormComponent {
    loginForm!: FormGroup<LoginForm>;
    errorMessage: string = '';

    constructor(
        private router: Router,
        private authService: AuthService
    ) {
        this.loginForm = new FormGroup({
            login: new FormControl<string | null>('', [Validators.required]),
            password: new FormControl<string | null>('', [Validators.required]),
        });
    }

    get loginField(): FormControl<string> {
        return this.loginForm.get('login') as FormControl;
    }

    get passwordField(): FormControl<string> {
        return this.loginForm.get('password') as FormControl;
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            const loginValue = this.loginField.value || '';
            const passwordValue = this.passwordField.value || '';

            const success = this.authService.login(loginValue, passwordValue);

            if (success) {
                this.router.navigate(['/instances']);
            } else {
                this.errorMessage = 'Please enter both login and password';
            }
        }
    }
}