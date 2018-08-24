import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { ARTICLES } from './mock-articles';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles()
  {
    return ARTICLES;
  }

}
