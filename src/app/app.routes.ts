import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent : () => import('../app/pages/posts/posts.component')
        .then(m => m.PostsComponent),
        pathMatch: 'full',
        canActivate: [authGuard]
    },
    {
        path: 'auth',
        loadComponent : () => import('../app/pages/login/login.component')
        .then(m => m.LoginComponent),
        pathMatch: 'full'
    },
    {
        path: 'register',
        loadComponent : () => import('../app/pages/register/register.component')
        .then(m => m.RegisterComponent),
        pathMatch: 'full'
    },
    {
        path: 'add-post',
        loadComponent : () => import('../app/pages/add-post/add-post.component')
        .then(m => m.AddPostComponent),
        pathMatch: 'full',
        canActivate: [authGuard]
    }
];
