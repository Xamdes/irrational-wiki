import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Article } from '../models/article.model';
import { routing } from '../app.routing';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

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
  articleId: string = "0";
  articleToDisplay: Article = null;

  constructor(private router: Router, private articleService: ArticleService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit()
  {
    this.articles = this.articleService.getArticles();
    this.articleService.getArticleById(this.articleId).subscribe(dataLastEmittedFromObserver =>
    {
      this.articleToDisplay = new Article(dataLastEmittedFromObserver.title, dataLastEmittedFromObserver.author, dataLastEmittedFromObserver.paragraphs);
    });
  }
  goToDetailPage(clickedArticle)
  {
    this.router.navigate(['articles', clickedArticle.$key]);
  };
}
