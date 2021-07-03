import { createElement } from '../../tools/elementTools.js';
import { setLoadEventForCss } from '../../tools/fileTools.js';
import Careers from './sections/Careers/Career.js';
import Introduction from './sections/introduction/Introduction.js';

const GridLeft = createElement(
	'div',
	{ className: 'grid-left' },
	[Introduction, Careers]
);

setLoadEventForCss(GridLeft, './pages/left-content/Title.css', 'css/Title');
setLoadEventForCss(GridLeft, './pages/left-content/NormalDesc.css', 'css/NormalDesc');

export default GridLeft;