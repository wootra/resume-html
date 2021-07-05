import { createElement } from '../../tools/elementTools.js';
import { setLoadEventForCss } from '../../tools/fileTools.js';
import SkillLevels from './skills/SkillLevels.js';
import Volunteers from './volunteers/Volunteers.js';

const GridRight = createElement(
	'div',
	{ className: 'grid-right' },
	[SkillLevels, Volunteers]
);

setLoadEventForCss(GridRight, './pages/right-content/GridRight.css', 'css/GridRight');

export default GridRight;