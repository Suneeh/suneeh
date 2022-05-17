import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-impressum-page',
    templateUrl: './impressum.page.html',
    styleUrls: ['./impressum.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImpressumPage { }
