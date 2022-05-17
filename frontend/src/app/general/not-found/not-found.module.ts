import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundPage } from './not-found.page';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NotFoundPage,
      },
    ]),
  ],
  declarations: [NotFoundPage],
})
export class NotFoundModule { }
