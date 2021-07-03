import { createElement } from '../../tools/elementTools.js';
import { setLoadEventForCss } from '../../tools/fileTools.js';
import { TopContents } from '../consts.js';

const Name = createElement('h1', {className: 'profile-name'}, TopContents.name);
const Address = createElement('h3', {className: 'profile-address'}, TopContents.address);
const Position = createElement('h2', {className: 'profile-position'}, TopContents.position);

const ProfileInfo = createElement(
	'div',
	{ className: 'name-address-container' },
	[Name, Address, Position]
);

setLoadEventForCss(ProfileInfo, './pages/top-content/ProfileInfo.css', 'css/ProfileInfo');

export default ProfileInfo;