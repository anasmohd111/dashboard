import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAppsComponent } from './all-apps/all-apps.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: AllAppsComponent },
  { path: '', redirectTo: 'allapps', pathMatch: 'full' },
  { path: 'update', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
