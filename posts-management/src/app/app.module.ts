import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostComponent } from './post/post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsByUserComponent } from './posts-by-user/posts-by-user.component';
import { RegisterUsingReactiveFormsComponent } from './register-using-reactive-forms/register-using-reactive-forms.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { CacheInterceptorService } from './cache-interceptor.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addPost', component: AddPostComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'post/:id/edit', component: EditPostComponent},
  {path: 'byUser', component: PostsByUserComponent},
  {path: 'signup', component: RegisterUsingReactiveFormsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    AddPostComponent,
    PostComponent,
    EditPostComponent,
    PostsByUserComponent,
    RegisterUsingReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
