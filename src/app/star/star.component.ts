import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  // private range: Array<number> = [1, 2, 3, 4, 5];
  @Input() rating: number;
  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();
  constructor() { }

  ngOnChanges(): void {
    console.log(this.rating);
    this.starWidth = this.rating * 86 / 5;
    console.log(this.starWidth);
  }

  onClick() {
    console.log(`The rating ${this.rating} was clicked`);
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
