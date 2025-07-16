import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { SharedModule } from '../shared/shared.modue';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, AddtaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
