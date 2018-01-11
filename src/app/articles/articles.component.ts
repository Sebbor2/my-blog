import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

import {ArticleService} from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent{
  //private articleService : ArticleService;
  articles : Article[];
  selectedArticle : Article;
  showDetail = false;
  charged = false;

  constructor(private articleService : ArticleService) {}

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getArticles()
      .subscribe((articles) => this.articles = articles);
      this.charged = true;
  }

  onSelect(article : Article) {
    console.log("Article : " + article.id);
    this.selectedArticle = article;
    this.showDetail = !this.showDetail;
  }

  /*supArticle(article: Article) {
    this.articleService.deleteArticle(article);
  }*/

  addArticle() {
    let article = new Article;
    /*let index = this.articleService.getLastId();
    if (index) {
      article.id = this.articleService.getLastId() +1 | 0;
    } else article.id = 0;*/

    article.title = "Nouvel Article";
    article.content = "voici un nouvel article a insérer dans la BDD";
    this.articleService.createArticle(article);
  }
/*
  editArticle(article: Article) {
    article.title = "Article modifié";
    this.articleService.updateArticle(article);
  }

  */

}
