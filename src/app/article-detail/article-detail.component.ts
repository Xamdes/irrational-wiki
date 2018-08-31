import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ArticleService } from '../services/article.service';
import { Location } from '@angular/common';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  providers: [ArticleService]
})
export class ArticleDetailComponent implements OnInit
{
  articleTitle: string = "";
  articles: FirebaseListObservable<any[]>;
  article: Article;
  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService) { }

  ngOnInit()
  {
    this.route.params.forEach((urlParameters) =>
    {
      this.articleTitle = urlParameters['id'];
    });
    console.log(this.articleTitle);

    this.articleService.getArticles().subscribe(articleList => {
      articleList.forEach(article => {
        if(article.title === this.articleTitle)
        {
          console.log(article);
          this.article = article;
        }
      });
    });


  }

}
