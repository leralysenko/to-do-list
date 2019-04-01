import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from 'src/app/list-module/list-page/list-page.component';

const routes: Routes = [
  { path: '', component: ListPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListModuleRoutingModule { }
