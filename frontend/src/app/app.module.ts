import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { ShellModule } from './shell/shell.module';

const startPage = 'dashboard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShellModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: startPage,
        pathMatch: 'full',
      },
      {
        path: '',
        component: ShellComponent,
        children: [
          // TODO - Add more routes - how does this work without libraries and routes.ts ? should be gigantic in here.
        ],
      },
    ],
      {
        paramsInheritanceStrategy: 'always',
        relativeLinkResolution: 'corrected',
      },
    ),
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
