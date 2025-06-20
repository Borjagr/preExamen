import { Routes } from '@angular/router';
import { View1Component } from './views/view1/view1.component'; 
import { View2Component } from './views/view2/view2.component';
import { View3Component } from './views/view3/view3.component';

export const routes: Routes = [
    { path: '', redirectTo: '/view1', pathMatch: 'full' },
    { path: 'view1', component: View1Component },
    { path: 'view2', component: View2Component },
    { path: 'view3', component: View3Component },
];
