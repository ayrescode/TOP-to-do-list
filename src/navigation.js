const taskArea = document.querySelector('.tasks');
import { shelf } from './create-task';

const navigationButton = document.querySelectorAll('nav>button');

navigationButton.forEach((button) =>
  button.addEventListener('click', (clickedButton) =>
    filterAndDisplay(clickedButton)
  )
);

// sidebar navigation and project filtering
function filterAndDisplay(clickedButton) {
  navigationButton.forEach((button) => {
    button.classList.remove('active');
  });
  clickedButton.target.classList.add('active');
  if (clickedButton.target.innerText === 'All projects') {
    displayItem(shelf);
  } else {
    const filtered = shelf.filter(
      (tasks) => tasks.project === clickedButton.target.innerText
    );
    displayItem(filtered);
    // console.log(filtered);
  }
}

// function checkActiveAndDisplay() {
//   navigationButton.forEach((button) => {
//     if (
//       button.classList.contains('active') &&
//       button.innerHTML === 'All projects'
//     ) {
//       displayItem(shelf);
//     } else {
//       const filtered = shelf.filter(
//         (tasks) => tasks.project === button.innerHTML
//       );
//       displayItem(filtered);
//     }
//   });
// }
// checkActiveAndDisplay();

// console.log(navigationButton);

export function displayItem(objectArray) {
  taskArea.innerHTML = '';

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
    task.setAttribute('data-index', objectArray.indexOf(item));
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
