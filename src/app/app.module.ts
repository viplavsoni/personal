import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { ProfessionalComponent } from './professional/professional.component';
import { PersonalComponent } from './personal/personal.component';
import { AboutComponent } from './about/about.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium, faTwitter, faYoutube, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { EditorModule } from '@progress/kendo-angular-editor';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfessionalComponent,
    PersonalComponent,
    AboutComponent,
    ContactComponent,
    PortfolioFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    EditorModule,
    TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, farSquare, farCheckSquare, faStackOverflow, faGithub, faMedium, 
      faTwitter, faYoutube, faInstagramSquare);
  }
}
