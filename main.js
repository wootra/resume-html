import mainPage from './pages/MainPage.js';
const root = document.getElementById('root');
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
