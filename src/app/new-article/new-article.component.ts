import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Article } from '../models/article.model';
import { routing } from '../app.routing';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
  providers: [ArticleService]
})
export class NewArticleComponent {

  constructor(private router: Router, private articleService: ArticleService, private route: ActivatedRoute, private location: Location) { }

  addArticle(author: string, title: string, paragraphs: string)
  {
    let newArticle = new Article(title,author,paragraphs.split("\n"));
    this.articleService.articles.push(newArticle);
    this.router.navigate(['']);
  }

}
