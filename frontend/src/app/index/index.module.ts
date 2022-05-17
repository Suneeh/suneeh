import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexPage } from './index.page';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: IndexPage,
            },
        ]),
    ],
    declarations: [IndexPage],
})
export class IndexModule { }
