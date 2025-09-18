import { display } from './display';

// Array to store task objects.
export const shelf = [];
// Defines the blueprint for a single to-do task.
export class task extends display {
  constructor(title, date, priority, project) {
    super();
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.project = project;
    this.navigationButton = document.querySelectorAll('nav>button');
  }

  // Adds a new task object to the 'shelf' array.
  updateShelf(object) {
    shelf.push(object);
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

// Defines a class to handle UI events, specifically for creating tasks.
export class event {
  constructor(button) {
    this.button = document.querySelector(button);
    this.createEvent();
  }

  // Attaches the click event listener to the button.
  createEvent() {
    this.button.addEventListener('click', this.createTask);
  }

  // This function is the callback for the click event. It gathers form data and creates a new task.
  createTask() {
    const title = document.querySelector('#title');
    const date = document.querySelector('#date');
    const priority = document.querySelector('#priority');
    const project = document.querySelector('#project');

    const newTask = new task(title.value, date.value, priority.value, project.value);

    newTask.updateShelf(newTask);

    title.value = '';
    date.value = '';
    priority.value = 'high';
  }
}
