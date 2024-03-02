import { Component, Input, OnInit } from '@angular/core';

import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: "./gifs-card.component.css"
})
export class GifsCardComponent implements OnInit {

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif es requerido');
  }

  @Input()
  public gif!:Gif;


}
