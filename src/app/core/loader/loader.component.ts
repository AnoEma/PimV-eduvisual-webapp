import { Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import {Subscription} from 'rxjs';
import { loaderSevice } from './loader.service';
import {LoaderState} from './loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy, AfterViewChecked{

  public show: boolean;
  private subscription: Subscription;

  constructor(
    private loaderService: loaderSevice,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
        this.show = state.show;
        this.cdRef.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewChecked(): void {
  this.cdRef.detectChanges();
  }

}
