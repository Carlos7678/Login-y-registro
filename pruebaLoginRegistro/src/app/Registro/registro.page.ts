import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit() {
  }

  async registrarUsuario(emailInput: IonInput, passwordInput: IonInput) {
    const email = await emailInput.getInputElement();
    const password = await passwordInput.getInputElement();
    
    this.userService.register(email.value, password.value).then((res) => {
      console.log(res);
      this.router.navigate(['/login']);
    }).catch((err) => {
      console.log(err);
    });
  }
}
    
  
