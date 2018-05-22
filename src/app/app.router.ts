import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: '/adverts', pathMatch: 'full' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'adverts', loadChildren: './adverts/adverts.module#AdvertsModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {

}
