import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase()

  if(this._tagsHistory.includes(tag)){
    //Filtro para no dejar pasar el mismo tag que ya se introdujo
    this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag)
  }

  this._tagsHistory.unshift(tag)
  //Limito que sea a 10 busquedas
  this._tagsHistory = this._tagsHistory.splice(0, 10)

  }

  searchTag(tag: string): void {
    if (tag === '') return;
    this.organizeHistory(tag)
  }
}
