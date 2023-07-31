import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { PageComponent } from './demo/page/page.component';

const routes: Routes = [
  { path: '', component: DemoComponent },
  { path: 'user', component: PageComponent },
  { path: 'user/:type', component: PageComponent },
  { path: 'user/:type/:item', component: PageComponent },
  { path: 'user/:type/:item/:reason', component: PageComponent },
  { path: 'snowman', component: PageComponent },
  { path: 'snowflake', component: PageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
