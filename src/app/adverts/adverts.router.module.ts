import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertsComponent } from './adverts.component';
import { AdvertsInfoComponent } from './adverts-info/adverts-info.component';
import { AdvertsEditComponent } from './adverts-edit/adverts-edit.component';
import { AdvertsEmptyComponent } from './adverts-empty/adverts-empty.component';

const routes: Routes = [
    { path: '', component: AdvertsComponent, children: [
        { path: '', component: AdvertsEmptyComponent },
        { path: 'view/:id', component: AdvertsInfoComponent },
        { path: 'edit/:id', component: AdvertsEditComponent }
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdvertsRouterModule {

}
