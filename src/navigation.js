const navigation = document.querySelector('nav');
const navigationButton = document.querySelectorAll('nav>button');

// i need to remove active from all.

// console.log(navigation);
// console.log(navigationButton);

// navigation.addEventListener('click', (button) => console.log(button.target));
navigation.addEventListener('click', (clicketButton) =>
  handleClick(clicketButton)
);

// remove active class from all items
function handleClick(clicketButton) {
  navigationButton.forEach((button) => {
    button.classList.remove('active');
  });
  clicketButton.target.classList.add('active');
}

// // adds active class to target button click
// function addClass() {
//   navigationButton.forEach((item) =>
//     item.addEventListener('click', (button) =>
//       button.target.classList.add('active')
//     )
//   );
// }

// navigation.forEach((item) =>
//   item.addEventListener('click', (button) =>
//     console.log(button.target.innerText)
//   )
// );
