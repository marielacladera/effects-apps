import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';
import { IconDefinition, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  public error: any;
  public faSpinner: IconDefinition;
  public loading: boolean;
  public user!: User;

  constructor(
    private _store: Store<AppState>,
    private _cdr: ChangeDetectorRef,
    private _router: ActivatedRoute
  ) {
    this.faSpinner= faSpinner;
    this.loading = false;
   }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this._store.select('user').subscribe(({ user, loading, error }) => {
      this.user = user!;
      this.loading = loading;
      this.error = error;
      this._cdr.markForCheck();
    });

    this._router.params.subscribe(({ id }) => {
      this._store.dispatch(loadUser({ id }))
    })
  }
}
