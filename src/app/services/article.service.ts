import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { ARTICLES } from '../mock-articles';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService
{
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase)
  {
    this.articles = database.list('articles');
  }

  getArticles()
  {
    return this.articles;
  }

  getArticleById(getId: string)
  {
    return this.database.object('articles/' + getId)
  }
}
