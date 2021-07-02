import { runFetch } from '../../tools/cssTools.js';
import { createElement } from '../../tools/elementTools.js';
import { getCurrentScriptFile } from '../../tools/fileTools.js';
import Carriers from './sections/Carriers.js';
import Introduction from './sections/Introduction.js';
const filePath = getCurrentScriptFile();

const GridLeft = createElement(
	'div',
	{ className: 'grid-left' },
	[Introduction, Carriers]
);

var id = window.addEventListener('load', () => {
	setTimeout(()=>{
		if(document.getElementsByClassName('grid-left').length > 0){
			
			runFetch(filePath, './pages/left-content/sections/CarrierBlock.css').then(res=>{
				console.log("loaded:", res);
				
				document.getElementById('CarrierBlock').innerHTML = res;
			});
			
			console.log("loaded..");
		}else{
			console.log("checking...");
		}
		
	}, 2000);
});

export default GridLeft;