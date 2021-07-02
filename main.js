import mainPage from './pages/MainPage.js';
import { setLoadEventForCss } from './tools/fileTools.js';
const root = document.getElementById('root');

setLoadEventForCss(root, './main.css', './main.css');
setLoadEventForCss(root, './tools/tooltip.css', './tools/tooltip.css');

window.addEventListener('load', () => {
	for(const node of root.childNodes){
		root.removeChild(node);
	}
	for(const node of root.children){
		root.removeChild(node);
	}
	root.appendChild(mainPage);
	console.log('loaded');
});
