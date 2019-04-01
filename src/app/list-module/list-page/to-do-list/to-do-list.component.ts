import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { INewTask } from 'src/app/inew-task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  @Input() list: INewTask[];

  @Output() deleteItem = new EventEmitter<INewTask>();
  @Output() updateItem = new EventEmitter<number>();

  constructor() { }

  updateTask(index: number) {
    this.updateItem.emit(index);
  }

  deleteTask(index: number) {
    this.deleteItem.emit(this.list[index]);
  }

  ngOnInit() {
  }

}
