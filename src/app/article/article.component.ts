import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent{
  //private articleService : ArticleService;
  articles : Article[];
  selectedArticle : Article;
  showDetail = false;
  charged = false;

  constructor(private articleService : ArticleService) {}

  loadArticlesBdd(): void {
    this.articleService.getArticlesBdd()
      .subscribe(articles => this.articles = articles);
      this.charged = true;
  }

  loadArticles(): void {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);
      this.charged = true;
  }

  onSelect(article : Article) {
    console.log("Article : " + article.id);
    this.selectedArticle = article;
    this.showDetail = !this.showDetail;
  }

  supArticle(article: Article) {
    this.articleService.deleteArticle(article);
  }

  editArticle(article: Article) {
    article.title = "Article modifié";
    this.articleService.updateArticle(article);
  }

  addArticle() {
    let article = new Article;
    let index = this.articleService.getLastId();
    if (index) {
      article.id = this.articleService.getLastId() +1 | 0;
    } else article.id = 0;

    article.title = "Article ajouté";
    this.articleService.createArticle(article);
  }

}
