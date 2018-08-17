import { Component, Input, Output } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'IrrationalWiki';
  articles: Article[] = [
    new Article('Gravity',0,['This is a test article for a featured article section.','Testing for Paragrph 2','Testing for Paragrph 3']),
    new Article('Sky',1,['This is a test article for a featured article section.','Testing for Paragrph 2','Testing for Paragrph 3']),
    new Article('Fire',2,['This is a test article for a featured article section.','Testing for Paragrph 2','Testing for Paragrph 3']),
    new Article('News Spin',3,['This is a test article for a featured article section.','Testing for Paragrph 2','Testing for Paragrph 3']),
    new Article('Earth',4,['This is a test article for a featured article section.','Testing for Paragrph 2','Testing for Paragrph 3']),
    new Article('Mars',5,['This is a test article for a featured article section.','Testing for Paragrph 2','Testing for Paragrph 3'])
  ];

  getFeaturedArticle()
  {
    return this.articles[0];
  }

  getArticleById(id: number)
  {
    this.articles.forEach(function(article){
      if(article.id === id)
      {
        return article;
      }
    });
    return new Article(`Article with id: ${id} not found`,5,['']);
  }
}
