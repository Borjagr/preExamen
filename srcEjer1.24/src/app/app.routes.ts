import { Routes } from '@angular/router';
import { ViewOneComponent } from './views/view-one/view-one.component';
import { ViewTwoComponent } from './views/view-two/view-two.component';
import { ViewThreeComponent } from './views/view-three/view-three.component';

export const routes: Routes = [
    { path: '', redirectTo: '/view-one', pathMatch: 'full' },
    { path: 'view-one', component: ViewOneComponent },
    { path: 'view-two', component: ViewTwoComponent },
    { path: 'view-three', component: ViewThreeComponent },
];
