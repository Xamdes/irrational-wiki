import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ArticleService } from '../article.service';
import { Location } from '@angular/common';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit
{
  articleId: string = "";
  articles: FirebaseListObservable<any[]>;
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit()
  {
    this.route.params.forEach((urlParameters) =>
    {
      this.articleId = urlParameters['id'];
    });
    console.log(this.articleId);
  }

}
