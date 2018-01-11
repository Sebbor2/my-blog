import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { ArticleService } from './article.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { PagingComponent } from './paging/paging.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    EditarticleComponent,
    ArticleDetailComponent,
    PagingComponent,
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
