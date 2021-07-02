import { createElement } from '../../../tools/elementTools.js';
import { LeftContents } from '../../consts.js';
import Title from '../Title.js';
import { CarrierBlock } from './CarrierBlock.js';

export default createElement(
	'div',
	{ className: 'section carriers' },
	[
		Title(LeftContents.Carriers.TITLE),
		...LeftContents.Carriers.CARRIERS.map(info=>CarrierBlock(info))
	],
);
