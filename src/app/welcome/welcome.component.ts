import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Article } from '../models/article.model';
import { routing } from '../app.routing';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ArticleService]
})
export class WelcomeComponent implements OnInit
{
  title: string = 'IrrationalWiki';
  articles: FirebaseListObservable<any[]>;
  articleId: string;
  articleToDisplay;

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit()
  {
    this.articles = this.articleService.getArticles();
    this.articleToDisplay = this.articleService.getArticleById(0);
  }

  goToDetailPage(clickedArticle)
  {
    this.router.navigate(['articles', clickedArticle.$key]);
  };

  getFeaturedArticle()
  {
    return this.articleToDisplay;
  }

}
