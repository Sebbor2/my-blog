import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input() id : number;
  @Input() title: string;
  @Input() content: string;
  @Input() showDetail: boolean;
  @Output() onDelete: EventEmitter<number>;

  constructor() {
    this.onDelete = new EventEmitter<number>();
  }

  fireEvent(event: MouseEvent) {
    console.log("Clic sur delete dans article d'id : " + this.id)
    this.onDelete.emit(this.id);
  }

  goBack() {
    this.showDetail = false;
  }
  ngOnInit() {
  }

}
