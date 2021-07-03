import { createElement } from '../../../../tools/elementTools.js';
import { setLoadEventForCss } from '../../../../tools/fileTools.js';
import { LeftContents } from '../../../consts.js';
import Title from '../../Title.js';
import { CareerBlock } from './CareerBlock.js';

const Careers = createElement(
	'div',
	{ className: 'section Careers' },
	[
		Title(LeftContents.Careers.TITLE),
		...LeftContents.Careers.CareerS.map(info=>CareerBlock(info))
	],
);

setLoadEventForCss(Careers, './pages/left-content/sections/Careers/CareerBlock.css', 'css/CareerBlock');

export default Careers;