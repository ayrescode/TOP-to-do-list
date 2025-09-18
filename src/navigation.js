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
