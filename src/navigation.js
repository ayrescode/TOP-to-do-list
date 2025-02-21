const navigation = document.querySelector('nav');
const navigationButton = document.querySelectorAll('nav>button');

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
