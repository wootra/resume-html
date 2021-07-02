/**
 * use this function only loading time.
 * for example, this will not work if you use in one of the function which is called after loading time.
 * @returns {string} filePath of script
 */
export const getCurrentScriptFile = ()=>{
    const scripts = document.getElementsByTagName("script");
    return scripts[scripts.length-1].src;
}
