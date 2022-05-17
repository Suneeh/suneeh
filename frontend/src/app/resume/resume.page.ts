import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-resume-page',
    templateUrl: './resume.page.html',
    styleUrls: ['./resume.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumePage { }
