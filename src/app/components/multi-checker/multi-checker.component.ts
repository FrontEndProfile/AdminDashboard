import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-multi-checker',
  templateUrl: './multi-checker.component.html',
  styleUrl: './multi-checker.component.scss',
})
export class MultiCheckerComponent {
  task: Task = {
    name: 'Select All',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Check Box', completed: false, color: 'primary' },
      { name: 'Check Box', completed: false, color: 'accent' },
      { name: 'Check Box', completed: false, color: 'warn' },
      { name: 'Check Box', completed: false, color: 'warn' },
      { name: 'Check Box', completed: false, color: 'accent' },
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }


  
}
