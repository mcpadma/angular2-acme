import { Component, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number; 
  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating * 86/5;
  }

}
