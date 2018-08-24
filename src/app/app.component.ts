import { Component, Input, Output } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'IrrationalWiki';
  articles: Article[];

  getFeaturedArticle()
  {
    return this.articles[0];
  }

  getArticleById(getId: number)
  {
    let pos = this.articles.map(function(e) { return e.id; }).indexOf(getId);
    return this.articles[pos];
  }
}
