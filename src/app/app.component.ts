import { Component } from '@angular/core';
import {AuthService} from './glucose-levels/services/auth.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sessionSubject: BehaviorSubject<string | null>
  constructor(private readonly authService: AuthService) {
    this.sessionSubject = authService.getTokenSubject();
  }

  login(){
    this.authService.login()
  }

  logout(){
    this.authService.logout();
  }
}
