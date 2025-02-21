import { display } from './display';
const projectTask = [];
const initDisplay = new display(projectTask);

export class task {
  constructor(title, date, priority, project) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.project = project;
    // this.createEvent();
  }
  createEvent() {
    const createButton = document.querySelector('form>button');
    createButton.addEventListener('click', this.createTask);
  }
  createTask() {
    const title = document.querySelector('#title');
    const date = document.querySelector('#date');
    const priority = document.querySelector('#priority');
    const project = document.querySelector('project');
    const testando = new task(title.value, date.value, priority.value);
    projectTask.push(testando);
    initDisplay.displayItem();

    title.value = '';
    date.value = '';
    priority.value = 'high';
  }
}
