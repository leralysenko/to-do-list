import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { INewTask } from 'src/app/inew-task';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.scss']
})
export class ItemInputComponent implements OnInit {

  @Output() addItem = new EventEmitter<INewTask>();
  public newTask: INewTask = {
    name: "",
    isDone: false
  };

  constructor() { }

  addTask() {
    this.addItem.emit(this.newTask);
    this.newTask = {
      name: "",
      isDone: false
    };
  }

  ngOnInit() {
  }

}
