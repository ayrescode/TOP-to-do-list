export const shelf = [];
import { displayItem } from './navigation';

export class task {
  constructor(title, date, priority, project) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.project = project;
    this.navigationButton = document.querySelectorAll('nav>button');
  }

  updateShelf(object) {
    shelf.push(object);
    this.checkActiveAndDisplay();
  }

  checkActiveAndDisplay() {
    this.navigationButton.forEach((button) => {
      if (
        button.classList.contains('active') &&
        button.innerHTML === 'All projects'
      ) {
        displayItem(shelf);
      } else if (button.classList.contains('active')) {
        const filtered = shelf.filter(
          (tasks) => tasks.project === button.innerHTML
        );
        displayItem(filtered);
      }
    });
  }
}

export class event {
  constructor(button) {
    this.button = document.querySelector(button);
    this.createEvent();
  }

  createEvent() {
    this.button.addEventListener('click', this.createTask);
  }

  createTask() {
    const title = document.querySelector('#title');
    const date = document.querySelector('#date');
    const priority = document.querySelector('#priority');
    const project = document.querySelector('#project');
    const newTask = new task(
      title.value,
      date.value,
      priority.value,
      project.value
    );
    newTask.updateShelf(newTask);
    title.value = '';
    date.value = '';
    priority.value = 'high';
  }
}
