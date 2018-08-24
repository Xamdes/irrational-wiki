import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Article } from '../models/article.model';
import { routing } from '../app.routing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  mainApp: AppComponent = new AppComponent();
  constructor(private router: Router)
  {

  }

  goToDetailPage(clickedArticle: Article)
  {
    this.router.navigate(['articles', clickedArticle.id]);
  };

}
