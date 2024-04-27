import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  async loginUsuario(emailInput: IonInput, passwordInput: IonInput) {
    const email = await emailInput.getInputElement();
    const password = await passwordInput.getInputElement();
    
    this.userService.login(email.value, password.value).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
}
}