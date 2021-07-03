import { createElement } from '../../tools/elementTools.js';
import { setLoadEventForCss } from '../../tools/fileTools.js';
import Carriers from './sections/carriers/Carriers.js';
import Introduction from './sections/introduction/Introduction.js';

const GridLeft = createElement(
	'div',
	{ className: 'grid-left' },
	[Introduction, Carriers]
);

setLoadEventForCss(GridLeft, './pages/left-content/Title.css', 'css/Title');
setLoadEventForCss(GridLeft, './pages/left-content/NormalDesc.css', 'css/NormalDesc');

export default GridLeft;