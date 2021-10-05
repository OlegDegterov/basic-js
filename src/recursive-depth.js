import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
    constructor(arr) {
        this.arr = arr; // bind incoming array
    }
    calculateDepth(arr) {
        const self = this; // we got ref to our obj
        // if present array is array and it has something inside
        // then we return 1 + we map inside each element to chek
        // if it is also an array and return recursive check of such array element
        // if it is just an array (has nothing inside) we return + 1
        // otherwise return zero
        return Array.isArray(arr) && arr.length
            ? 1 + Math.max(...arr.map((e) => self.calculateDepth(e)))
            : Array.isArray(arr) && !arr.length
                ? +1
                : 0;
    }
}
