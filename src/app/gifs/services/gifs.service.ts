import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[]= []




  constructor() {

   }


  get tagsHistory(){
    return [...this._tagsHistory]
  }

  searchTag(tag:string):void{
    if(tag === "") return

    this._tagsHistory.unshift(tag)
  }
}
