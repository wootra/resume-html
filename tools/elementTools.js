/**
 * 
 * @param {string} name 
 * @param {Object.<string,string>} attrs 
 * @param {[Element|string]|string} children 
 * @returns {Element}
 */
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
 * 
 * @param {Element} element 
 * @returns 
 */
const isDisplayNone = element => {
	if(element.tagName === 'BODY') return false;
	const computedStyle = window.getComputedStyle(element);
	console.log("isDisplayNone:", element.tagName, element.className, computedStyle.display)
	if(computedStyle.display === 'none') return true;
	else return isDisplayNone(element.parentNode);
}

/**
 * 
 * @param {HTMLCollection} elements 
 * @returns 
 */
const getOnlyVisibleElements = elements => {
	if(!elements) return [];
	const childrenToRet = [];
	
	for(let n=0; n<elements.length; n++){
		!isDisplayNone(elements[n]) && childrenToRet.push(elements[n]);
	}
	console.log(elements, elements[0], childrenToRet);
	return childrenToRet;
}

/**
 * @param {string} selector
 * @returns {[Element]}
 */
export const getElementBySelector = (selector, includingHidden=false) => {
	const ret = document.querySelectorAll(selector);
	console.log("getElementBySelector - ", selector, ret)
	return ret && includingHidden ? ret : getOnlyVisibleElements(ret);
}

/**
 * 
 * @param {Element} element 
 * @param {[Element]} children 
 */
export const replaceChildren = (element, children=[]) => {
	const itemsToRemove = [];
	for(const node of element.children){
		itemsToRemove.push(node);
	}
	itemsToRemove.forEach(node=>{
		try{
			element.removeChild(node);
		}catch(e){
			console.log("removing:"+node+" has been failed:", e)
		}
		
	})
	!Array.isArray(children) && (children = [children])
	children.forEach(el=>{
		element.appendChild(el);
	})
	
}