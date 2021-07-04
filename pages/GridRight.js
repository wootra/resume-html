import { createElement } from '../tools/elementTools.js';
import { setLoadEventForCss } from '../tools/fileTools.js';

const GridRight = createElement(
	'div',
	{ className: 'grid-right' },
	document.createTextNode('right')
);

setLoadEventForCss(GridRight, './pages/GridRight.css', 'css/GridRight');

export default GridRight;