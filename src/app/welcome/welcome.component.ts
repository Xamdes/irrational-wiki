import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Article } from '../models/article.model';
import { routing } from '../app.routing';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ArticleService]
})
export class WelcomeComponent implements OnInit
{
  title: string = 'IrrationalWiki';
  articles: Article[];

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit()
  {
    this.articles = this.articleService.getArticles();
  }

  goToDetailPage(clickedArticle: Article)
  {
    this.router.navigate(['articles', clickedArticle.id]);
  };

  getFeaturedArticle()
  {
    return this.articles[0];
  }

  getArticleById(getId: number)
  {
    let pos = this.articles.map(function (e) { return e.id; }).indexOf(getId);
    return this.articles[pos];
  }

}
