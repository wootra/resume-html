import { createElement } from '../../tools/elementTools.js';



export default desc => createElement(
	'p',
	{ className: 'normal-desc' },
	document.createTextNode(desc)
);
