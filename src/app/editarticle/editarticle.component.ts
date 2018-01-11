import { Component, OnInit} from '@angular/core';
import { Article } from '../article';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {ArticleService} from '../article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})
export class EditArticleComponent {
  article: Article;

  constructor(
    private articleService : ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
    ) {this.article = new Article();}

  ngOnInit() : void {
    this.getArticle();
  }

  getArticle() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id) {
      this.articleService.getArticle(id)
        .subscribe(article => this.article = article);
    }
  }

  cancel() {
    this.article.title = "";
    this.article.content = "";
  }

  validArticle() {
    //TODO : Verifier si edit ou new
    this.articleService.createArticle(this.article);
    this.router.navigateByUrl("/articles");
  }

}
