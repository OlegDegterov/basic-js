import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value==null) { this.chain.push(`( )`)
    } else {this.chain.push(`( ${value} )`)};
    return this
  },
  removeLink(position) {
    if (((typeof position)!== 'number')
        || !(Number.isInteger(position))
        || this.chain.find(item => item === position)) {
      throw new Error ('You can\'t remove incorrect link!')
    } else {this.chain.splice(position, 1)}
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    setTimeout(function (){ return chaines.chain = []}, 0);
    //console.log(this)
    return this.chain.join('~~')
  }
};
