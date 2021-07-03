import { registerLoadEvent } from "./loadingTools.js";

console.log("currentScript:", document.currentScript);

/**
 * 
 * @param {Element} element 
 * @param {string} cssRelativePath path relative to root.
 * @param {string} styleId id that is set in the index.html > link tag.
 */
export const setLoadEventForCss = (element, cssRelativePath, styleId ) => {
    registerLoadEvent(element, () => {
        document.getElementById(styleId).href = cssRelativePath;
    });
}

