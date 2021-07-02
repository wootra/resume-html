import { getElementBySelector } from "./elementTools.js";

/**
 * @type {{value: Object.<string, [function]>}}
 */
const loadingQueue = {
    value: {}
};

/**
 * 
 * @param {Element} element 
 * @returns 
 */
const getUniqInfo = element => {
    if(element.id) return "#"+element.id;
    if(element.className) return "."+element.className;
    console.trace(element);
    throw new Error(`invalid: ${element} to register event, you need to set className or id on the element`);
}

/**
 * register the callback for onLoadCallback
 * @param {Element} element 
 * @param {function(Element)} onLoadCallback 
 */
export const registerLoadEvent = (element, onLoadCallback )=>{
    const selector = getUniqInfo(element);
    if(!loadingQueue.value[selector]){
        loadingQueue.value[selector] = []; //create a list.
    }
    loadingQueue.value[selector].filter(
        callback=>callback === onLoadCallback
    ).length === 0  && loadingQueue.value[selector].push(onLoadCallback);
}

window.addEventListener('load', ()=>{
    var __loadingToolCheckerId = setInterval(()=>{
        for(const selector in loadingQueue.value){
            if(loadingQueue.value[selector].length === 0) continue;

            const elements = getElementBySelector(selector);
            if(elements.length > 0){
                loadingQueue.value[selector].forEach(evHandler=>{
                    evHandler(elements)
                });
                while(loadingQueue.value[selector].length>0) loadingQueue.value[selector].pop();
            }
        }
        const emptyQueues = Object.keys(loadingQueue.value).filter(s=>loadingQueue.value[s].length===0);
        if(emptyQueues.length > 0){
            const newObj = {};
            for(const selector in loadingQueue.value){
                if(!emptyQueues.includes(selector)) newObj[selector] = loadingQueue.value[selector];
            }
            loadingQueue.value = newObj;
        }
        if(Object.keys(loadingQueue.value).length === 0){
            clearInterval(__loadingToolCheckerId);
        }
    }, 250)
})