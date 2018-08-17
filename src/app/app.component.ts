import { Component, Input, Output } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'IrrationalWiki';
  featuredArticle: Article = new Article(['This is a test article for a featured article section.','Testing for Paragrpah 2','Testing for Paragrpah 3']);
}
