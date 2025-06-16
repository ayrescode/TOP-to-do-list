import { shelf } from './create-task';

export class display {
  constructor() {
    this.taskArea;
  }
  displayItem(objectArray) {
    this.taskArea = document.querySelector('.tasks');
    this.taskArea.innerHTML = '';
    for (const item of objectArray) {
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
      task.setAttribute('data-index', shelf.indexOf(item));
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
      this.taskArea.appendChild(task);
    }
  }
}
