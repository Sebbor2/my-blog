import { Component, Output, EventEmitter } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-edit-article',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})
export class EditarticleComponent {
  article: Article;
  idCount: number;

  @Output() onCancel: EventEmitter<void>;
  @Output() onValid: EventEmitter<Article>;

  constructor() {
    this.onCancel = new EventEmitter<void>();
    this.onValid = new EventEmitter<Article>();
    this.article = new Article();
    this.idCount = 10;
  }

  cancel() {
    this.onCancel.emit();
    this.article.title = "";
    this.article.content = "";
  }

  validArticle() {
    this.onValid.emit(new Article(this.idCount,this.article.title,this.article.content));
    this.idCount++;
  }

}
