import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit
{
  articleId: string = "";
  articleToDisplay: Article;

  constructor(private route: ActivatedRoute, private location: Location, private articleService) { }

  ngOnInit()
  {
    this.route.params.forEach((urlParameters) =>
    {
      this.articleId = urlParameters['id'];
    });
    console.log(this.articleId);
  }

}
