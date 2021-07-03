import { createElement } from '../../../../tools/elementTools.js';
import { setLoadEventForCss } from '../../../../tools/fileTools.js';
import { LeftContents } from '../../../consts.js';
import Title from '../../Title.js';
import { CarrierBlock } from './CarrierBlock.js';

const Carriers = createElement(
	'div',
	{ className: 'section carriers' },
	[
		Title(LeftContents.Carriers.TITLE),
		...LeftContents.Carriers.CARRIERS.map(info=>CarrierBlock(info))
	],
);

setLoadEventForCss(Carriers, './pages/left-content/sections/carriers/CarrierBlock.css', 'css/CarrierBlock');

export default Carriers;