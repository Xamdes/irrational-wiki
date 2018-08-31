import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Article } from '../models/article.model';
import { routing } from '../app.routing';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
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
  articles: Article[];
  articleTitle: string = "Ipsum";
  article: Article;
  intro: string
  date: Date;
  featuredNumber: number;

  constructor(private router: Router, private articleService: ArticleService, private route: ActivatedRoute, private location: Location) {
    this.articles = [];
    this.article = new Article("","");
    this.date = new Date();
    this.featuredNumber = this.date.getUTCFullYear()+this.date.getUTCMonth() + this.date.getUTCDate();
  }

  ngOnInit()
  {
    this.articleService.getArticles().subscribe(articleObservables => {
      this.articles = articleObservables;
      let articleIndex = this.featuredNumber%this.articles.length;
      this.articleTitle = this.articles[articleIndex].title;
      this.articles.forEach(article => {
        if(article.title === this.articleTitle)
        {
          this.article = article;
          this.intro = this.article.paragraphs.shift();
        }
      });
    });
  }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
