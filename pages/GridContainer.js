import { createElement } from '../tools/elementTools.js';
import GridTop from './top-content/GridTop.js';
import GridLeft from './left-content/GridLeft.js';
import GridRight from './GridRight.js';
import { setLoadEventForCss } from '../tools/fileTools.js';

const GridContainer = createElement(
	'div',
	{ className: 'grid-container' },
	[GridTop, GridLeft, GridRight]
);

setLoadEventForCss(root, './pages/GridContainer.css', 'css/GridContainer');

export default GridContainer;