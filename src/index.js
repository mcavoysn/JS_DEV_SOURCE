import numeral from 'numeral';
import './index.css';
/* eslint-disable no-console */
/* eslint-disable no-debugger */

const courseValue = numeral(50).format('$0,0.00');
debugger;
console.log(`I would pay ${courseValue} for this class.`);
