import { createElement } from '../../tools/elementTools.js';
import Carriers from './sections/Carriers.js';
import Introduction from './sections/Introduction.js';

export default createElement(
	'div',
	{ className: 'grid-left' },
	[Introduction, Carriers]
);
