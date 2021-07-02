import { createElement } from '../../tools/elementTools.js';
import { TopContents } from '../consts.js';

const Name = createElement('h1', {className: 'profile-name'}, TopContents.name);
const Address = createElement('h3', {className: 'profile-address'}, TopContents.address);
const Position = createElement('h2', {className: 'profile-position'}, TopContents.position);

export default createElement(
	'div',
	{ className: 'name-address-container' },
	[Name, Address, Position]
);