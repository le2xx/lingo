import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { ContentComponent } from './components/content/content.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { LessonCardComponent } from './components/lesson-card/lesson-card.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AuthorComponent } from './components/author/author.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    HeaderComponent,
    LeftSideBarComponent,
    ContentComponent,
    RightSideBarComponent,
    LessonCardComponent,
    StatisticsComponent,
    AuthorComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
