export const createElement = (name, attrs = {}, children = []) => {
	const element = document.createElement(name);
	for (const attrName in attrs) {
		element[attrName] = attrs[attrName];
	}
	if (typeof children !== 'string' && !Array.isArray(children)) {
		children = [children];
	}
	for (let child of children) {
		if(typeof child === 'string'){
			child = document.createTextNode(child);
		}
		element.appendChild(child);
	}
	return element;
};

export const createImage = (src, attrs={}) => {
	const element = document.createElement('img');

	element.src = './images/' + src;

	for (const attrName in attrs) {
		element[attrName] = attrs[attrName];
	}
	return element;
}