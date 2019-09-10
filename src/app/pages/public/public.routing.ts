import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';

const publicRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: PublicComponent,
        children: [
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'contact',
                loadChildren: './contact/contact.module#ContactModule'
            },
            {
                path: 'about',
                loadChildren: './about/about.module#AboutModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(publicRoutes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
