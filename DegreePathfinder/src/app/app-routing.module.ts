import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { OnboardComponent } from './onboard/onboard.component';
import { UserSettingsGuard } from './user-settings.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'onboard',
    pathMatch: 'full'
  },
  {
    path: "onboard",
    canActivate: [UserSettingsGuard],
    component: OnboardComponent,
  },
  {
    path: "editor",
    component: EditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
