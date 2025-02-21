import { display } from './display';
import { initDisplay } from './navigation';
import { projectTask } from './navigation';
import { important } from './navigation';
import { side } from './navigation';

// const initDisplay = new display(Important);

export class task {
  constructor(title, date, priority, menuTab) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.menuTab = menuTab;
  }
  createEvent() {
    const createButton = document.querySelector('form>button');
    createButton.addEventListener('click', this.createTask);
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
    if (newTask.menuTab === 'important') {
      important.push(newTask);
    } else if (newTask.menuTab === 'side') {
      side.push(newTask);
    }
    initDisplay.displayItem();

    title.value = '';
    date.value = '';
    priority.value = 'high';
  }
}
