import { createElement } from '../../tools/elementTools.js';
import { setLoadEventForCss } from '../../tools/fileTools.js';
import { TopContents } from '../consts.js';

const Name = createElement('h1', {className: 'profile-name'}, TopContents.name);
const Address = createElement('h3', {className: 'profile-address'}, TopContents.address);
const Position = createElement('h2', {className: 'profile-position'}, TopContents.position);

const Phone = createElement('div', {className: 'profile-phone'}, TopContents.contact.phone);
const Email = createElement('div', {className: 'profile-email'}, 
	createElement('a', {
			href: `mailto:${TopContents.contact.email}`, 
			"data-tooltip": `please send me an email`,
			"data-email": TopContents.contact.email
		},
		TopContents.contact.email
	)
);
const Contact = createElement('div', {className: 'profile-contacts'}, 
	[Email, Phone]
);

const createLinkDiv = (url,className,content) => createElement('div', {className}, 
	createElement('a', {
		href: `mailto:${url}`, 
		target: "_blank",
		"data-tooltip": `move to ${url}`
	},
	content
	)
)

const GitHub = createLinkDiv(TopContents.website.github, 'profile-github', TopContents.website.github);
const HomePage = createLinkDiv(TopContents.website.homepage, 'profile-homepage', TopContents.website.homepage);

const WebSites = createElement('div', {className: 'profile-websites'}, 
	[GitHub, HomePage]
);

const ProfileInfo = createElement(
	'div',
	{ className: 'name-address-container' },
	[Name, Address, Position, Contact, WebSites]
);

setLoadEventForCss(ProfileInfo, './pages/top-content/ProfileInfo.css', 'css/ProfileInfo');

export default ProfileInfo;