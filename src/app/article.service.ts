import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticlesBdd(): Observable<Article[]> {
    return this.http.get<Article[]>("http://www.bordeu.fr/loadjson.php",{
      headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
    });
  }

  getArticles(): Observable<Article[]> {
    return of (ARTICLES);
  }

  updateArticle(article : Article) : void {
    let index = ARTICLES.findIndex((articlebis: Article) => articlebis.id == article.id);
    ARTICLES[index]=article;
  }

  createArticle(article: Article) : void {
    ARTICLES.push(article);
  }

  deleteArticle(article: Article) : void {
    let index = ARTICLES.findIndex((articlebis: Article) => articlebis.id == article.id);
    if (index >= 0) {
      ARTICLES.splice(index,1);
    }
  }

  getLastId(): number {
    if (ARTICLES == []) {
      return ARTICLES[ARTICLES.length-1].id;
    } else return -1;
  }
}
