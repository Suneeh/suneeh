import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { ShellModule } from './shell/shell.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShellModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./index/index.module').then((m) => m.IndexModule),
          },
          {
            path: 'resume',
            loadChildren: () => import('./resume/resume.module').then((m) => m.ResumeModule),
          },
          {
            path: 'impressum',
            loadChildren: () => import('./general/impressum/impressum.module').then((m) => m.ImpressumModule),
          },
          {
            path: '**',
            loadChildren: () => import('./general/not-found/not-found.module').then((m) => m.NotFoundModule),
          },
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
