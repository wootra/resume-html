import { createElement } from "./elementTools.js";
import { registerLoadEvent, registerLoadEventOnce } from "./loadingTools.js";

/**
 * 
 * @param {Element} element 
 * @param {string} cssRelativePath path relative to root.
 * @param {string} styleId id that is set in the index.html > link tag.
 */
export const setLoadEventForCss = (element, cssRelativePath, styleId ) => {
    registerLoadEvent(element, () => {
        const styleLinkHolder = document.getElementById(styleId);
        console.log("adding style id:", styleId);
        if(!styleLinkHolder){
            console.log("adding style id creating new:", styleId);
            document.head.appendChild(createElement("link", {rel:"stylesheet", id: styleId, href: cssRelativePath}));
        }else{
            console.log("adding style id adding in exising:", styleId);
            document.getElementById(styleId).href = cssRelativePath;
        }
    });
}
