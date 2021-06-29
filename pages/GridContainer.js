import { createElement } from '../tools/elementTools.js';
import GridTop from './top-content/GridTop.js';
import GridLeft from './left-content/GridLeft.js';
import GridRight from './GridRight.js';
export default createElement(
	'div',
	{ className: 'grid-container' },
	[GridTop, GridLeft, GridRight]
);
