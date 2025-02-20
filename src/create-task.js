import { display } from './display';
import { taskArea } from './display';
const project = [];
const project2 = [];
const project3 = [];
const buttons = document.querySelector('nav');

class task {
  constructor(title, date, priority) {
    this.title = title;
    this.date = date;
    this.priority = priority;
  }
  createTask() {
    let newTask = new task(this.title, this.date, this.priority);
    return project.push(newTask);
  }
}

const clean = new task('lavar louça', 'amanhã', 'high');
const clean1 = new task('lavar louça', 'amanhã', 'high');

clean.createTask();
clean1.createTask();

const test = new display(project);
test.displayItem();

buttons.addEventListener('click', () => {
  console.log('hey');
});
