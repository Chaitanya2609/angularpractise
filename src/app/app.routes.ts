import { ServerComponent } from './server/server.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'parent',
    title:'App parent Page',
    component:ParentComponent,
  },
  {
    path:'child',
    title:'App child Page',
    component:ChildComponent,
  },
  {
    path:'server',
    title:'App server Page',
    component:ServerComponent,
  },
];
