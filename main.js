import mainPage from './pages/MainPage.js';
import { replaceChild } from './tools/elementTools.js';
import { setLoadEventForCss } from './tools/fileTools.js';
import { startMonitoring } from './tools/loadingTools.js';
const root = document.getElementById('root');

setLoadEventForCss(root, './tools/tooltip.css', 'css/tooltip');

startMonitoring(()=>{
	replaceChild(root, mainPage);
	console.log('loaded');
});

// window.addEventListener('DOMContentLoaded', () => {
// 	startMonitoring();
// 	console.log("dom content loaded");
// 	replaceChild(root, mainPage);
// 	console.log('loaded');
// });
