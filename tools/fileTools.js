import { runFetch } from "./cssTools.js";
import { getElementBySelector } from "./elementTools.js";
import { registerLoadEvent } from "./loadingTools.js";

console.log("currentScript:", document.currentScript);

const TRY_COUNT = 10;
const MAX_TRY = 100;
export const setLoadEventForCss = (element, cssRelativePath, styleId ) => {
    registerLoadEvent(element, () => {
        console.log("eventHandler is called.")
        runFetch("", cssRelativePath).then(res=>{
            document.getElementById(styleId).innerHTML = res;
        });
    });
}

