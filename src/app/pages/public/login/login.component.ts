import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public loginValidationMessages: any;

  constructor() {
    this.formLogin = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)])
    });
    this.loginValidationMessages = {
      email: [
        { type: 'required', message: 'Informe seu E-mail' },
        { type: 'pattern', message: 'E-mail inválido' }
      ],
      password: [
        { type: 'required', message: 'Informe seu E-mail' },
        { type: 'minLength', message: 'Senha inválida' },
        { type: 'maxLength', message: 'Senha inválida' }
      ]
    }
  }

  ngOnInit() {
    this.update();
  }

  public submitFormLogin() {
    console.log(this.formLogin);
  }

  public update() {
    this.formLogin.get('password').valueChanges.subscribe(
      value => {
        console.log(value);
      }
    )
  }
}
