import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Article } from './article';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://www.bordeu.fr/api/get.php",{
      headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
    });
  }

  getArticle(id:number) : Observable<Article> {
    let url = "http://www.bordeu.fr/api/get" + id.toString()+".php";
    return this.http.get<Article>(url,{
      headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
    });
  }

  createArticle(article: Article) : void {
    this.http.post("http://www.bordeu.fr/api/create.php",article,{

      headers: new HttpHeaders({'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'*','Access-Control-Allow-Methods': '*'})
    }).subscribe(
        res => {
          console.log("pas d'erreur ", res);
        },
        err => {
          console.log("Error occured" , err);
        });
    this.getArticles();
  }

  /*deleteArticle(article: Article) : void {
    let index = ARTICLES.findIndex((articlebis: Article) => articlebis.id == article.id);
    if (index >= 0) {
      ARTICLES.splice(index,1);
    }
  }*/

  /*updateArticle(article : Article) : void {
    let index = ARTICLES.findIndex((articlebis: Article) => articlebis.id == article.id);
    ARTICLES[index]=article;
  }*/
}
