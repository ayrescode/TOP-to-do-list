import { display } from './display';
const projectTask = [];
const Important = [];
const Side = [];
const initDisplay = new display(Important);

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
    if (newTask.menuTab === 'Important') {
      Important.push(newTask);
    } else if (newTask.menuTab === 'Side') {
      Side.push(newTask);
    }
    initDisplay.displayItem();

    title.value = '';
    date.value = '';
    priority.value = 'high';
  }
}
