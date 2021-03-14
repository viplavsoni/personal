import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalComponent } from './personal/personal.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { ProfessionalComponent } from './professional/professional.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: '', component: PersonalComponent},
  {path: 'professional', component: ProfessionalComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'portfolio-form', component: PortfolioFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
