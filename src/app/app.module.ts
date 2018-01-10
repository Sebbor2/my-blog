import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { ArticleService } from './article.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { PagingComponent } from './paging/paging.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    EditarticleComponent,
    ArticleDetailComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
