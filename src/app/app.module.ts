import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { RouterModule } from '@angular/router';
import { NewPostComponent } from './post-list/new-post/new-post.component';
import { PostService } from './Services/post.service';
import { HeaderComponent } from './header/header.component';

const appRoutes = [
  {path: 'posts', component: PostListComponent},
  {path: 'new', component: NewPostComponent},
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: '**', component: PostListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
