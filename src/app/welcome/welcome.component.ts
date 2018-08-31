import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Article } from '../models/article.model';
import { routing } from '../app.routing';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
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
  articleTitle: string = "Gravity";
  article: Article;
  intro: string

  constructor(private router: Router, private articleService: ArticleService, private route: ActivatedRoute, private location: Location) {
    this.article = new Article("","");
  }

  ngOnInit()
  {
    this.articles = this.articleService.getArticles();
    this.getArticleFromDatabase();
  }

  goToDetailPage(clickedArticle)
  {
    this.router.navigate(['articles', clickedArticle.title]);
  };

  getArticleFromDatabase()
  {
    this.articleService.getArticles().subscribe(articleList => {
      articleList.forEach(article => {
        if(article.title === this.articleTitle)
        {
          console.log(article);
          this.article = article;
          this.intro = this.article.paragraphs.shift();
        }
      });
    });
  }
}
