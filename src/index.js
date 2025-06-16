// // index.js
import './styles.css';
import { event } from './create-task';
import { navigation } from './navigation';
import { display } from './display';
import { deleteButton } from './delete-task';

new event('form>button');
new navigation('nav>button');
new display('.tasks');
new deleteButton('nav>button', '.tasks');
