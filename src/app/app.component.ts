import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { LinksComponent } from './links/links.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormComponent, FooterComponent, LinksComponent, ReviewsComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestJuniorFrontend';
}
