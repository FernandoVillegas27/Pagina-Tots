import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  dataError: boolean = false;
  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.success === true) {
          this.router.navigate(['/cliente']);
        } else {
          this.dataError = true;
        }
      },
      (error) => {
        // Manejar errores de la llamada al servicio
      }
    );
  }
}
