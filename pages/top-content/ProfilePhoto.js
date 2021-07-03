import { createElement, createImage } from '../../tools/elementTools.js';
import { setLoadEventForCss } from '../../tools/fileTools.js';


const Profile1 = createImage('profile-photo.png', {
	className: 'profile-photo-top',
});

const Profile2 = createImage('profile-photo.png', {
	className: 'profile-photo-bottom',
});

const Meditation = createImage('meditation.png', {
	className: 'meditation-photo',
});

const ProfilePhoto = createElement(
	'a',
	{ className: 'profile-photo-container' },
	[Profile1, Meditation, Profile2]
);

setLoadEventForCss(ProfilePhoto, './pages/top-content/ProfilePhoto.css', 'css/ProfilePhoto');

export default ProfilePhoto;