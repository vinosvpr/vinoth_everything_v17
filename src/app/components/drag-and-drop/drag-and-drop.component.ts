import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.css',
})
export class DragAndDropComponent {
  ticketsArray: any[] = [
    {
      ticketId: 'Jira--001',
      ticketName: 'Layout change',
      status: 'In Progress',
    },
    {
      ticketId: 'Jira--002',
      ticketName: 'Employee List',
      status: 'Review',
    },
    {
      ticketId: 'Jira--003',
      ticketName: 'Reset Password',
      status: 'Done',
    },
    {
      ticketId: 'Jira--004',
      ticketName: 'User Registration',
      status: 'To do',
    },
    {
      ticketId: 'Jira--005',
      ticketName: 'User Login',
      status: 'To do',
    },
    {
      ticketId: 'Jira--006',
      ticketName: 'Role Login',
      status: 'To do',
    },
  ];
  currentItem: any;
  constructor() {}

  filterTickets(status: string) {
    return this.ticketsArray.filter((m) => m.status === status);
  }

  onDragStart(item: any) {
    this.currentItem = item;
  }
  onDragOver(event: any) {
    console.log(`onDragOver`);
    event.preventDefault();
  }
  onDrop(event: any, status: string) {
    console.log(`onDrop`);
  }
}
