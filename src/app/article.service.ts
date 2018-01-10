import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Article } from './article';
import { ARTICLES } from './mock-articles';

// rXlr98@6
/*const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Request-Method': 'GET OPTION',
  })
};*/

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticlesBdd(): Observable<Article[]> {
    //httpOptions.set("Access-Control-Allow-Methods", "GET");
    let databdd = this.http.get<Article[]>("http://bordeu.fr/loadjson.php");
    console.log(databdd);
    return this.http.get<Article[]>("http://bordeu.fr/loadjson.php");
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
