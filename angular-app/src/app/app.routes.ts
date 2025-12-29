import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { BlogListComponent } from './pages/blog-list.component';
import { BlogPostComponent } from './pages/blog-post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:slug', component: BlogPostComponent },
];
