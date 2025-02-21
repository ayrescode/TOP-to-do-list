import { display } from './display';
const navigation = document.querySelector('nav');
const navigationButton = document.querySelectorAll('nav>button');
export let initDisplay;
export const allTasks = [];
export const important = [];
export const side = [];

navigation.addEventListener('click', (clickedButton) =>
  handleClick(clickedButton)
);

// remove active class from all items
function handleClick(clickedButton) {
  navigationButton.forEach((button) => {
    button.classList.remove('active');
  });
  clickedButton.target.classList.add('active');
  if (clickedButton.target.classList.contains('important')) {
    initDisplay = new display(important);
    initDisplay.displayItem();
  } else if (clickedButton.target.classList.contains('side')) {
    initDisplay = new display(side);
    initDisplay.displayItem();
  } else if (clickedButton.target.classList.contains('all')) {
    initDisplay = new display(side);
  }
  console.log(initDisplay);
}
