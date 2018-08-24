import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.css']
})
export class DisplayArticleComponent {

  @Input() childArticle: Article;

  constructor(private router: Router )
  {}


  isValid()
  {
    return true;
  }

  goToDetailPage(clickedArticle: Article)
  {
    this.router.navigate(['articles', clickedArticle.title]);
  };


}
