import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListModuleRoutingModule } from './list-module-routing.module';
import { ListPageComponent } from 'src/app/list-module/list-page/list-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ItemInputComponent } from './list-page/item-input/item-input.component';
import { ToDoListComponent } from './list-page/to-do-list/to-do-list.component';

@NgModule({
  imports: [
    CommonModule,
    ListModuleRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    ListPageComponent,
    ItemInputComponent,
    ToDoListComponent
  ]
})
export class ListModuleModule { }
