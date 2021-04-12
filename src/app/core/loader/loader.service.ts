
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {LoaderState} from './loader';

@Injectable()
export class LoaderSevice{
    private _loaderState: LoaderState;
    private loaderSubject = new Subject<LoaderState>();

    loaderState = this.loaderSubject.asObservable();

    constructor() {
        this._loaderState = new LoaderState();
    }

    show() {
        this._loaderState.show = true;
        this.loaderSubject.next(this._loaderState);
    }

    hide() {
        this._loaderState.show = false;
        this.loaderSubject.next(this._loaderState);
    }
}