import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  dataError: string = '';
  viewError: boolean = false;
  constructor(private loginService: RegisterService, private router: Router) {}

  onSubmit() {
    this.loginService.register(this.email, this.password).subscribe(
      (response) => {
        if (response.success === true) {
          this.router.navigate(['/cliente']);
        } else {
          this.viewError = true;
          this.dataError = response.error.message;
        }
      },
      (error) => {
        // Manejar errores de la llamada al servicio
      }
    );
  }
}
