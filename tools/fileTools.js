import { registerLoadEvent } from "./loadingTools.js";

console.log("currentScript:", document.currentScript);

export const setLoadEventForCss = (element, cssRelativePath, styleId ) => {
    registerLoadEvent(element, () => {
        document.getElementById(styleId).href = cssRelativePath;
    });
}

