import mainPage from './pages/MainPage.js';
import { replaceChild } from './tools/elementTools.js';
import { setLoadEventForCss } from './tools/fileTools.js';
const root = document.getElementById('root');

setLoadEventForCss(root, './main.css', './main.css');
setLoadEventForCss(root, './tools/tooltip.css', './tools/tooltip.css');

window.addEventListener('load', () => {
	replaceChild(root, mainPage);
	console.log('loaded');
});
