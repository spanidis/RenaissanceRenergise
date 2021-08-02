import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordinatesInteractionService {

  private _coordsMessageSource = new Subject<string>();
  coordsMessage$ = this._coordsMessageSource.asObservable();
  
  constructor() { }

  //create a method that accepts a message from the google component and pusses this message using the observable. 
  sentMessage(message: string){
    this._coordsMessageSource.next(message);
  }
}
