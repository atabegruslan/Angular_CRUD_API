import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './components/destinations/destinations.component';

const routes: Routes = [
  { path: '', redirectTo: 'destinations', pathMatch: 'full' },
  { path: 'destinations', component: DestinationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
