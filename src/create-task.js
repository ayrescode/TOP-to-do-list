import { display } from './display';
import { taskArea } from './display';
const projectTask = [];
const project2 = [];
const project3 = [];

export class task {
  constructor(title, date, priority, project) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }
  createTask() {
    let newTask = new task(this.title, this.date, this.priority);
    projectTask.push(newTask);
  }
}
const test = new display(projectTask);
const createButton = document.querySelector('form>button');
createButton.addEventListener('click', handleClick);

function handleClick() {
  const title = document.querySelector('#title');
  const date = document.querySelector('#date');
  const priority = document.querySelector('#priority');
  const project = document.querySelector('project');
  const testando = new task(title.value, date.value, priority.value);
  projectTask.push(testando);
  test.displayItem();

  title.value = '';
  date.value = '';
  priority.value = 'high';
}
