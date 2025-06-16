import { shelf } from './create-task';
import { display } from './display';

export class deleteButton extends display {
  constructor(navButton, taskArea) {
    super();
    this.navigationButton = document.querySelectorAll(navButton);
    this.taskArea = document.querySelector(taskArea);
    this.deleteEvent();
  }
  deleteEvent() {
    this.taskArea.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete')) {
        const index = event.target.parentElement.getAttribute('data-index');
        this.deleteTask(index);
      }
    });
  }
  deleteTask(index) {
    shelf.splice(index, 1);
    this.checkActiveAndDisplay();
  }
  checkActiveAndDisplay() {
    this.navigationButton.forEach((button) => {
      if (
        button.classList.contains('active') &&
        button.innerHTML === 'All projects'
      ) {
        this.displayItem(shelf);
      } else if (button.classList.contains('active')) {
        const filtered = shelf.filter(
          (tasks) => tasks.project === button.innerHTML
        );
        this.displayItem(filtered);
      }
    });
  }
}
