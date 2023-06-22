import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}
  
    //logica de inicio de sesion

    onSubmit() {
      //aqui agregas la logica de validacion de inicio de sesion

      //obtienes los datos del formulario

      const email = (document.getElementById('email')as HTMLInputElement).value;
      const password = (document.getElementById('password')as HTMLInputElement).value;

      //ejemplo de validacion simple 

      if (email === 'luis@ejemplo.com' && password === 'password') {
        this.router.navigate(['/dashboard']);
      } else {
        //inicio de sesion fallido, muestra mensaje de error

        alert('Usuario o contraseña incorrectos');

    //redirigir al componenente de dashboard

    this.router.navigate(['/dashboard']);

  }
}

}
