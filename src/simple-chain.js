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
    this.chain.push(value);
    return this
  },
  removeLink(position) {
    this.chain.splice(position, 1);
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    return this.chain
  }
};
