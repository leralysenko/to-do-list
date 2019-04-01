import { Component, OnInit } from '@angular/core';
import { ProjectManagerService } from 'src/app/services/project-manager.service';
import { INewTask } from 'src/app/inew-task';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public list: any = []

  constructor(private projectManagerSrvc: ProjectManagerService) { }

  addTask(item: INewTask) {
    this.list.push(item);
    this.updateList();
  }

  deleteTask(task: INewTask) {
    let index = null;

    this.list.find((elem: INewTask, i) => { if (elem === task) index = i; });
    this.list.splice(index, 1);
    this.updateList();
  }

  setTaskDone(index: number) {
    this.list[index].isDone = true;
    this.updateList();
  }

  updateList() {
    this.projectManagerSrvc.updateListById(this.list).subscribe(value => {
      console.log(value);
    });
  }

  ngOnInit() {
    this.projectManagerSrvc.getListById().subscribe(value => {
      console.log(value);

      this.list = value.userList;
    });
  }

}
