export const createElement = (name, attrs = {}, children = []) => {
	const element = document.createElement(name);
	for (const attrName in attrs) {
		if(attrName.startsWith("data-")){
			element.dataset[attrName.replace("data-","")] = attrs[attrName];
		}else{
			element[attrName] = attrs[attrName];
		}
	}
	
	if (typeof children === 'string' || !Array.isArray(children)) {
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
	element.alt = 'image';
	element.loading = "lazy";

	for (const attrName in attrs) {
		element[attrName] = attrs[attrName];
	}
	return element;
}

/**
 * @param {string} selector
 * @returns {[Element]}
 */
export const getElementBySelector = selector => {
	const numOfSymbols = selector.split('').filter(c=>"#.".includes(c)).length;

	if(numOfSymbols > 1){
		throw new Error(`${selector} must be multi-depth selector. not supported`)
	}else if(numOfSymbols === 1 && !(selector.startsWith('.') || selector.startsWith('#'))){
		// the case like div.my-class
		throw new Error(`${selector} must be multi-depth selector. not supported`)
	}

	if(selector.startsWith("#")) {
		const ret = document.getElementById(selector.replace("#",""));
		return ret.length === undefined ? [ret] : ret;
	}else if(selector.startsWith(".")) {
		return document.getElementsByClassName(selector.replace(".",""));
	}else if(selector[0].match(/[a-zA-Z]{1}/).length > 0) {
		return document.getElementsByTagName(selector);
	}else {
		throw new Error(`${selector} is an invalid selector`)
	}
}

export const replaceChild = (element, child) => {
	for(const node of element.childNodes){
		element.removeChild(node);
	}
	for(const node of element.children){
		element.removeChild(node);
	}
	element.appendChild(child);
}