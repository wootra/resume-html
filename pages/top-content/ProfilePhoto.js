import { createElement, createImage } from '../../tools/elementTools.js';


const Profile1 = createImage('profile-photo.png', {
	className: 'profile-photo-top',
});

const Profile2 = createImage('profile-photo.png', {
	className: 'profile-photo-bottom',
});

const Meditation = createImage('meditation.png', {
	className: 'meditation-photo',
});

export default createElement(
	'a',
	{ className: 'profile-photo-container' },
	[Profile1, Meditation, Profile2]
);