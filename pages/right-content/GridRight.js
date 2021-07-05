import { createElement } from '../../tools/elementTools.js';
import { setLoadEventForCss } from '../../tools/fileTools.js';
import Educations from './educations/Educations.js';
import SkillLevels from './skills/SkillLevels.js';
import Volunteers from './volunteers/Volunteers.js';

const GridRight = createElement(
	'div',
	{ className: 'grid-right' },
	[SkillLevels, Volunteers, Educations]
);

setLoadEventForCss(GridRight, './pages/right-content/GridRight.css', 'css/GridRight');

export default GridRight;