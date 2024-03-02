import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = "";

  public loading: boolean = false;


  ngOnInit(): void {
    if (!this.url) {
      throw new Error('la url es requerida');
    }
  }

  onLoad(): void {
    this.loading = true;
  }


}
