import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';
import { IconDefinition, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  public error: any;
  public faSpinner: IconDefinition;
  public loading: boolean;
  public users: User[];

  constructor(
    private _store: Store<AppState>,
    private _cdr: ChangeDetectorRef
  ) {
    this.faSpinner= faSpinner;
    this.loading = false;
    this.users = [];
  }

  public ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this._store.select('users').subscribe(({ users, loading, error }) => {
      this.error = error;
      this.loading = loading;
      this.users = users;
      this._cdr.markForCheck();
    })
    this._store.dispatch(loadUsers());
  }

}
