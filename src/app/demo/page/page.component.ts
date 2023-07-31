import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit {
  currentUrl = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.pipe(take(1)).subscribe((url) => {
      this.currentUrl = url.join('/');
    });
  }
}
