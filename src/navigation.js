// import { display } from './display';

// class unifyShelfs {
//   constructor(...array) {
//     this.allArrays = array;
//   }
//   unified = [];
//   unifyallArrays() {
//     for (let i = 0; i < this.allArrays.length; i++) {
//       let outerArray = this.allArrays[i];
//       for (let innerArray = 0; innerArray < outerArray.length; innerArray++) {
//         this.unified.push(outerArray[innerArray]);
//       }
//     }
//     return this.unified;
//   }
// }

//  if (clickedButton.target.classList.contains('important')) {
//     initDisplay = new display(important);
//     initDisplay.displayItem();
//   } else if (clickedButton.target.classList.contains('side')) {
//     initDisplay = new display(side);
//     initDisplay.displayItem();
//   } else if (clickedButton.target.classList.contains('all')) {
//     allProjectDisplay();
//   }
// export function allProjectDisplay() {
//   const all = new unifyShelfs(important, side).unifyallArrays();
//   initDisplay = new display(all);
//   initDisplay.displayItem();
// }

const navigationButton = document.querySelectorAll('nav>button');

navigationButton.forEach((button) =>
  button.addEventListener('click', (clickedButton) =>
    handleClick(clickedButton)
  )
);

// remove active class from all items
function handleClick(clickedButton) {
  navigationButton.forEach((button) => {
    button.classList.remove('active');
  });
  clickedButton.target.classList.add('active');
  console.log(clickedButton.target.innerText);
}

console.log(navigationButton);
