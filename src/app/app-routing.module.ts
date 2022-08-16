import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryListComponent } from './country-list/country-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'countries', pathMatch:'full'},
  {path: 'countries',component:CountryListComponent},
  {path: 'countries/:id', component: CountryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
