import { shelf } from './create-task';
import { display } from './display';

// Defines a class to handle the delete functionality for tasks.
export class deleteButton extends display {
  constructor(navButton, taskArea) {
    super();
    this.navigationButton = document.querySelectorAll(navButton);
    this.taskArea = document.querySelector(taskArea);
    this.deleteEvent();
  }

  // Sets up the event listener for delete actions using event delegation.
  deleteEvent() {
    this.taskArea.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete')) {
        const index = event.target.parentElement.parentElement.parentElement.getAttribute('data-index');
        this.deleteTask(index);
      }
    });
  }

  // Removes a task from the 'shelf' array at a specific index.
  deleteTask(index) {
    shelf.splice(index, 1);
    this.checkActiveAndDisplay();
  }

  // Checks which navigation filter is active and re-renders the task list accordingly.
  checkActiveAndDisplay() {
    this.navigationButton.forEach((button) => {
      if (button.classList.contains('active') && button.innerHTML === 'All projects') {
        this.displayItem(shelf);
      } else if (button.classList.contains('active')) {
        const filtered = shelf.filter((tasks) => tasks.project === button.innerHTML);
        this.displayItem(filtered);
      }
    });
  }
}
