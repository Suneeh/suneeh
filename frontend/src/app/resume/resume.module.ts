import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumePage } from './resume.page';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ResumePage,
            },
        ]),
    ],
    declarations: [ResumePage],
})
export class ResumeModule { }
