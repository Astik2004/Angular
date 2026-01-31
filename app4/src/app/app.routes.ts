import { About } from './about/about';
import { Header } from './header/header';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Contact } from './contact/contact';
import { GoToError } from './go-to-error/go-to-error';

export const routes: Routes = [
    {path: 'header', component: Header },
    {path: '', component: Home },
    {path:'about',component:About},
    {path:'profile',component:Profile},
    {path:'contact',component:Contact},
    {path: '**', component: GoToError }
];
