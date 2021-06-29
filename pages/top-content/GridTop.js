import { createElement } from '../../tools/elementTools.js';
import ProfilePhoto from './ProfilePhoto.js';
import NameAddress from './NameAddress.js';

export default createElement(
	'div',
	{ className: 'grid-top' },
	[ProfilePhoto, NameAddress]
);