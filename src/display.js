// Imports the 'shelf' array, which is the main data store for all tasks.
import { shelf } from './create-task';

// Defines a class responsible for rendering the to-do items to the DOM.
export class display {
  constructor() {
    this.taskArea;
  }

  // This method clears the current task list and renders a new one based on the provided array.
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

      // Use a template literal to build the HTML structure for a single task item.
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
