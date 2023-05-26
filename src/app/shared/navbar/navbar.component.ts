import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  public ngOnInit(): void {
  }

  public goUser(id: string) {
    if( !id ) {
      return;
    }
    this._router.navigate(['user', id])
  }

}
