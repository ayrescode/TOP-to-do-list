// import { allProjectDisplay } from './navigation';

export const taskArea = document.querySelector('.tasks');

export class display {
  constructor(array) {
    this.shelf = array;
    this.deleteEvent();
  }
  displayItem() {
    taskArea.innerHTML = '';

    for (const item of this.shelf) {
      let selectHigh = '';
      let selectMedium = '';
      let selectLow = '';
      if (item.priority === 'high') {
        selectHigh = 'selected';
      } else if (item.priority === 'medium') {
        selectMedium = 'selected';
      } else if (item.priority === 'low') {
        selectLow = 'selected';
      }
      const task = document.createElement('div');
      task.setAttribute('data-index', this.shelf.indexOf(item));
      task.innerHTML = `<div class="task">
                      <div><input type="checkbox" id="task">
                          <label for="task">${item.title}</label>
                      </div>
                      <div>
                          <input type="date" id="date" value="${item.date}">
                          <select name="priority" id="priority" >
                              <option value="high" ${selectHigh}>High</option>
                              <option value="medium" ${selectMedium}>Medium</option>
                              <option value="low" ${selectLow}>Low</option>
                          </select>
                      <button class="delete">Delete task</button>                
                      </div>
                  </div>`;
      taskArea.appendChild(task);
    }
  }
  deleteTask(index) {
    this.shelf.splice(index, 1);
    console.log(this.shelf);
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
