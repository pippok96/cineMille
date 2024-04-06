import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, StoricoComponent } from './components';

const routes: Routes = [
  {path: 'storico', component: StoricoComponent},
  {path: 'home', component: HomeComponent},
  //{path: '', redirectTo :'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
