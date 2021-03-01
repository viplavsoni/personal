import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  events: string[] = [];
  opened: boolean;
}
