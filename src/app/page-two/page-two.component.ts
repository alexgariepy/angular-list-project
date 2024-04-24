import {Component} from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrl: './page-two.component.css'
})
export class PageTwoComponent {

  columns: Column[] = [
    new Column('To Do', ['Task1', 'Task2', 'Task3']),
    new Column('In Progress', ['Task4', 'Task5', 'Task6']),
    new Column('Done', ['Task7', 'Task8'])
  ]

  board: Board = new Board('Kanban', this.columns)

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
