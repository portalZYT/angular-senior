import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as articleReducer from '../../reducers/article.reducer';
import * as fromActions from '../../actions/article.actions';
import {ArticleState} from '../../reducers/app.states';
import {Article, FAVORITE_ARTICLES} from '../../models/article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent {

  articles: Observable<any>;

  constructor(private store: Store<ArticleState>) {
    this.articles = store.select(articleReducer.getArticles);
  }

  showJavaArticles() {
    this.store.dispatch(new fromActions.JavaArticlesAction());
  }

  showAngularArticles() {
    this.store.dispatch(new fromActions.AngularArticlesAction());
  }

  showFavoriteArticles() {
    this.store.dispatch(new fromActions.FavoriteArticlesAction(FAVORITE_ARTICLES));
  }
}
