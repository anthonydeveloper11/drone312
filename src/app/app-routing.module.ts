import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { InsightComponent } from './insight/insight.component';
import { MoreinsightComponent } from './moreinsight/moreinsight.component';

const routes: Routes = [
  { 
    path: '',
    canActivate: [],
    component: HomeComponent 
  },
  { 
    path: 'products',
    canActivate: [],
    component: ProductsComponent 
  },
  { 
    path: 'about',
    canActivate: [],
    component: AboutComponent 
  },
  { 
    path: 'careers',
    canActivate: [],
    component: CareersComponent 
  },
  { 
    path: 'events',
    canActivate: [],
    component: InsightComponent
  },
  { 
    path: 'insight',
    canActivate: [],
    component: MoreinsightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
