import { createElement } from '../../../../tools/elementTools.js';
import { LeftContents } from '../../../consts.js';
import NormalDesc from '../../NormalDesc.js';
import Title from '../../Title.js';

export default createElement(
	'div',
	{ className: 'section introduction' },
	[
		Title(LeftContents.Introduction.TITLE),
		...NormalDesc(LeftContents.Introduction.DESC)
	]	
);