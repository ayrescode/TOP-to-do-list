// index.js
import './styles.css';
import './display';
import './create-task';
import './navigation';

import { task } from './create-task';

const initCreate = new task().createEvent();

const firstButton = document.querySelector('nav>button');
window.addEventListener('DOMContentLoaded', () => {
  firstButton.click();
});
