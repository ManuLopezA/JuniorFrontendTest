import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  numberOfStars: number = 5; 

  getStarsArray(): number[] {
    return Array(this.numberOfStars).fill(0);
  }
}
