import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  public gifList:Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      //Filtro para no dejar pasar el mismo tag que ya se introdujo
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    //Limito que sea a 10 busquedas
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  searchTag(tag: string) {
    if (tag === '') return;
    this.organizeHistory(tag);

    //  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`)

    this.http.get<SearchResponse>(
      `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`)
      .subscribe( (response ) => {
        this.gifList = response.data;
        
      })
  }
}
