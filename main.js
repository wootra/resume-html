import mainPage from './pages/MainPage.js';
const root = document.getElementById('root');
window.addEventListener('load', () => {
	root.appendChild(mainPage);
	console.log('loaded');
});
