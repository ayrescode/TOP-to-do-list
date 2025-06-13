const shelf = [];

export class task {
  constructor(title, date, priority, project) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }

  updateShelf(object) {
    shelf.push(object);
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
    console.log(shelf);
    title.value = '';
    date.value = '';
    priority.value = 'high';
  }
}
