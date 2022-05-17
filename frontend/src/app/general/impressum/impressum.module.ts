import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImpressumPage } from './impressum.page';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ImpressumPage,
            },
        ]),
    ],
    declarations: [ImpressumPage],
})
export class ImpressumModule { }
