import { shelf } from './create-task';
import { display } from './display';

export class navigation extends display {
  constructor(navButton) {
    super();
    this.navigationButton = document.querySelectorAll(navButton);
    this.navigationEvent();
  }
  navigationEvent() {
    this.navigationButton.forEach((button) =>
      button.addEventListener('click', (clickedButton) =>
        this.filterAndDisplay(clickedButton)
      )
    );
  }
  // sidebar navigation and project filtering
  filterAndDisplay(clickedButton) {
    this.navigationButton.forEach((button) => {
      button.classList.remove('active');
    });
    clickedButton.target.classList.add('active');
    if (clickedButton.target.innerText === 'All projects') {
      this.displayItem(shelf);
    } else {
      const filtered = shelf.filter(
        (tasks) => tasks.project === clickedButton.target.innerText
      );
      this.displayItem(filtered);
    }
  }
}

// const navigationButton = document.querySelectorAll('nav>button');
// console.log(document.querySelector('.tasks'));

// const taskArea = document.querySelector('.tasks');

// function deleteTask(index) {
//   shelf.splice(index, 1);
//   checkActiveAndDisplay();
// }

// function deleteEvent() {
//   taskArea.addEventListener('click', (event) => {
//     if (event.target.classList.contains('delete')) {
//       const index = event.target.parentElement.getAttribute('data-index');
//       deleteTask(index);
//     }
//   });
// }
// deleteEvent();

// function checkActiveAndDisplay() {
//   navigationButton.forEach((button) => {
//     if (
//       button.classList.contains('active') &&
//       button.innerHTML === 'All projects'
//     ) {
//       displayItem(shelf);
//     } else if (button.classList.contains('active')) {
//       const filtered = shelf.filter(
//         (tasks) => tasks.project === button.innerHTML
//       );
//       displayItem(filtered);
//     }
//   });
// }
