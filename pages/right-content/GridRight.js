import { createElement } from '../../tools/elementTools.js';
import { setLoadEventForCss } from '../../tools/fileTools.js';
import SkillLevels from './SkillLevels.js';

const GridRight = createElement(
	'div',
	{ className: 'grid-right' },
	[SkillLevels]
);

setLoadEventForCss(GridRight, './pages/right-content/GridRight.css', 'css/GridRight');

export default GridRight;