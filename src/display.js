export const taskArea = document.querySelector('.tasks');

export class display {
  constructor(array) {
    this.shelf = array;
    this.deleteEvent();
  }
  displayItem() {
    taskArea.innerHTML = '';
    for (const item of this.shelf) {
      const task = document.createElement('div');
      task.setAttribute('data-index', this.shelf.indexOf(item));
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
      console.log(this.shelf.indexOf(item));
      taskArea.appendChild(task);
    }
  }
  deleteTask(index) {
    this.shelf.splice(index, 1);
    this.displayItem();
  }
  deleteEvent() {
    taskArea.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete')) {
        const index = event.target.parentElement.getAttribute('data-index');
        this.deleteTask(index);
      }
    });
  }
}
