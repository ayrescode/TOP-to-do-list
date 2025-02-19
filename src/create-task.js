const project = [];
const taskArea = document.querySelector('.tasks');

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
const clean2 = new task('lavar louça', 'amanhã', 'high');

clean2.createTask();
clean1.createTask();
clean.createTask();

console.log(project);

const canva = document.querySelector('.tasks');

class display {
  constructor(...array) {
    this.shelf = array;
  }
  unified = [];
  unifyshelf() {
    for (let i = 0; i < this.shelf.length; i++) {
      let x = this.shelf[i];
      for (let j = 0; j < x.length; j++) {
        this.unified.push(x[j]);
      }
    }
    return this.unified;
  }
  displayItem() {
    taskArea.innerHTML = '';
    for (const item of project) {
      const task = document.createElement('div');
      task.setAttribute('data-index', project.indexOf(item));
      task.innerHTML = `<div class="task">
                    <div><input type="checkbox" checked="" id="">
                        <label for="task">${item.title}</label>
                    </div>
                    <div>
                        <input type="date">
                        <select name="priority" id="priority">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    <button class="delete">Delete task</button>                
                    </div>
                </div>`;
      console.log(project.indexOf(item));
      canva.appendChild(task);
    }
  }
  deleteTask(index) {
    project.splice(index, 1);
    this.displayItem();
  }
}

taskArea.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    const index = event.target.parentElement.getAttribute('data-index');
    test.deleteTask(index);
  }
});

// function deleteBook(index) {
//   project.splice(index, 1);
//   test.displayItem();
// }

const test = new display(project);

test.displayItem();
