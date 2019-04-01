import {Store} from '@ngrx/store';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as articleReducer from '../../reducers/article.reducer';
import * as fromActions from '../../actions/article.actions';
import {ArticleState} from '../../reducers/app.states';
import {Article, FAVORITE_ARTICLES} from '../../models/article';

@Component({
  selector: 'app-test-demo2',
  templateUrl: './test-demo2.component.html',
  styleUrls: ['./test-demo2.component.sass']
})
export class TestDemo2Component {
  articles: Observable<Article[]>;

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
