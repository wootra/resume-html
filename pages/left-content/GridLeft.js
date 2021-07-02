import { createElement } from '../../tools/elementTools.js';
import { setLoadEventForCss } from '../../tools/fileTools.js';
import Carriers from './sections/Carriers.js';
import Introduction from './sections/Introduction.js';
const filePath = document.currentScript;
console.log({filePath});
const GridLeft = createElement(
	'div',
	{ className: 'grid-left' },
	[Introduction, Carriers]
);

setLoadEventForCss(GridLeft, './pages/left-content/sections/CarrierBlock.css', 'CarrierBlock');

export default GridLeft;