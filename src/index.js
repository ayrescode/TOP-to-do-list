// index.js
import './styles.css';
import './create-task';
import './display';
import './navigation';

import { task } from './create-task';

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
