// index.js
import './styles.css';
import './display';
import './create-task';
import './navigation';

import { task } from './create-task';

const initCreate = new task().createEvent();



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
