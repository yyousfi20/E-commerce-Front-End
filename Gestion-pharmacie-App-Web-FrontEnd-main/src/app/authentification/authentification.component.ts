import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }
save(f)
{
this.AuthService.SignUp(f.email,f.password);
console.log(f);
}
}
