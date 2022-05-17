import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-index-page',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexPage { }
