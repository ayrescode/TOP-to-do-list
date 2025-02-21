import { initDisplay } from './navigation';
import { important } from './navigation';
import { side } from './navigation';
const firstButton = document.querySelector('nav>button');
import { allProjectDisplay } from './navigation';

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
    allProjectDisplay();
    // initDisplay.displayItem();

    title.value = '';
    date.value = '';
    priority.value = 'high';
  }
}
