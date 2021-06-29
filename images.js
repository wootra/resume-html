const loadImage = (src) => {
	const image = import(src);
	return "data:image/png;base64, "+image;
}

window.images = Object.freeze({
	profile: loadImage("./images/profile-photo.png")
})

window.addEventListener('load', () => {
	// window.images = Object.freeze({
	// 	profile: loadImage("./images/profile-photo.png")
	// })
	console.log("image is loaded")
});

