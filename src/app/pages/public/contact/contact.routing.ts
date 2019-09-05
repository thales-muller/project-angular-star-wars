import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
    {
        path: '',
        component: ContactComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(contactRoutes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }
