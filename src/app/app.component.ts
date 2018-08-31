import { Component, Input, Output, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { ArticleService } from './services/article.service';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})
export class AppComponent implements OnInit {
  title: string = 'IrrationalWiki';
  articles: Article[];

  constructor(private articleService: ArticleService){
    this.articles = [];
  }

  ngOnInit()  {

    this.articleService.getArticles().subscribe(articleObservables => {
      this.articles = articleObservables;
    });


  }

}
