import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardComponent } from './onboard/onboard.component';
import { EditorComponent } from './editor/editor.component';
import { HttpClientModule } from '@angular/common/http';
import { RequirementsListComponent } from './requirements-list/requirements-list.component';
import { PathService } from 'src/core/services/path.service';
import { DegreePickerComponent } from './degree-picker/degree-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardComponent,
    EditorComponent,
    RequirementsListComponent,
    DegreePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
