import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoCardComponent } from './info-card/info-card.component'; // 名字要写对哦
import { MyLivingComponent } from './tab-content/tpls/my-living/my-living.component';
import { MyTripComponent } from './tab-content/tpls/my-trip/my-trip.component';
import { MyExperienceComponent } from './tab-content/tpls/my-experience/my-experience.component';
import { MyStateComponent } from './tab-content/tpls/my-state/my-state.component';
import { MoreComponent } from './tab-content/tpls/more/more.component';

const routes: Routes = [
  {
    path: 'home',
    component: InfoCardComponent,
    children: [
      {
        path: 'living',
        component: MyLivingComponent,
      },
      {
        path: 'trip',
        component: MyTripComponent,
      },
      {
        path: 'experience',
        component: MyExperienceComponent,
      },
      {
        path: 'state',
        component: MyStateComponent,
      },
      {
        path: 'more',
        component: MoreComponent,
      },
    ]
  },
  {
    path: '',
    redirectTo: '/home/living',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 创建根路由
  exports: [RouterModule]
})
export class AppRoutingModule { }
