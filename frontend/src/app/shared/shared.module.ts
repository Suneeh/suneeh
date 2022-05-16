import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';

NgModule({
    exports: [
      // Angular
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
  
      // Material
      MatButtonModule,
      MatCheckboxModule,
      MatDatepickerModule,
      MatIconModule,
      MatInputModule,
      MatNativeDateModule,
    ],
    providers: [],
  })
  export class SharedModule {}