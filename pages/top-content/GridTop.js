import { createElement } from '../../tools/elementTools.js';
import ProfilePhoto from './ProfilePhoto.js';
import ProfileInfo from './ProfileInfo.js';

const PhotoArea = createElement(
	'div',
	{ className: 'grid-top-photo' },
	ProfilePhoto
);

const InfoArea = createElement(
	'div',
	{ className: 'grid-top-info' },
	ProfileInfo
);


export default createElement(
	'div',
	{ className: 'grid-top' },
	[PhotoArea, InfoArea]
);