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

  constructor(private articleService : ArticleService) {}

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getArticles()
      .subscribe((articles) => this.articles = articles);
  }

  onSelect(article : Article) {
    console.log("Article : " + article.id);
    this.selectedArticle = article;
    this.showDetail = !this.showDetail;
  }


/*
  editArticle(article: Article) {
    article.title = "Article modifié";
    this.articleService.updateArticle(article);
  }

  */

}
