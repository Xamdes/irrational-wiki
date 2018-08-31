import { Component, Input, Output, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticleService)
  {
    this.articles = [];
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(articleObservables => {
      this.articles = articleObservables;
    });
  }

}
