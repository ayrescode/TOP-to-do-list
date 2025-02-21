import { display } from './display';

const navigation = document.querySelector('nav');
const navigationButton = document.querySelectorAll('nav>button');
export let initDisplay = new display([]);
export const important = [];
export const side = [];

class unifyShelfs {
  constructor(...array) {
    this.allArrays = array;
  }
  unified = [];
  unifyallArrays() {
    for (let i = 0; i < this.allArrays.length; i++) {
      let outerArray = this.allArrays[i];
      for (let innerArray = 0; innerArray < outerArray.length; innerArray++) {
        this.unified.push(outerArray[innerArray]);
      }
    }
    return this.unified;
  }
}

navigation.addEventListener('click', (clickedButton) =>
  handleClick(clickedButton)
);

// remove active class from all items
function handleClick(clickedButton) {
  console.log(clickedButton);
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
    const all = new unifyShelfs(important, side).unifyallArrays();
    initDisplay = new display(all);
    initDisplay.displayItem();
  }
}
