import { createElement } from "./elementTools.js";
import { registerLoadEvent } from "./loadingTools.js";

/**
 * 
 * @param {Element} element 
 * @param {string} cssRelativePath path relative to root.
 * @param {string} styleId id that is set in the index.html > link tag.
 */
export const setLoadEventForCss = (element, cssRelativePath, styleId ) => {
    registerLoadEvent(element, () => {
        const styleLinkHolder = document.getElementById(styleId);
        if(!styleLinkHolder){
            document.head.appendChild(createElement("link", {rel:"stylesheet", id: styleId, href: cssRelativePath}));
        }else{
            let existingHref = document.getElementById(styleId).href;
            existingHref = existingHref.replace(/https?:\/\/[a-z.:0-9]+\//,"");
            if(existingHref !== cssRelativePath.replace("./","")) {
                console.log({existingHref, cssRelativePath})
                //prevent same css is loaded occuring re-render of DOM
                document.getElementById(styleId).href = cssRelativePath;
            }
        }
    });
}
