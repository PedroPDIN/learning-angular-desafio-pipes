import { Component, OnInit } from '@angular/core';
import { OperationService } from './services/operations.service';
import { OperationsListResponse } from './types/operations-list-response.type';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  searchTerm: string = '';
  // operationsList: OperationsListResponse = [];
  operationsList$: Observable<OperationsListResponse> | undefined;

  constructor(private readonly _operationService: OperationService) {}

  ngOnInit() {
    this.operationsList$ = this._operationService.getOperations();

    // this.getOperations();
  }

  // getOperations() {
  //   this._operationService
  //     .getOperations()
  //     .pipe(take(1)) // outro método para o conceito de onsubscribe.
  //     .subscribe((v) => {
  //       console.log(v);
  //       this.operationsList = v;
  //     });
  // }
}
