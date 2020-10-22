//Back Button
function Back(){
	window.history.back();
};




//Previous and next button
let numberOfImages;
let images = 0;
function nextbutton(){
	let slider = document.getElementById("slider");
	images++;
	if(images >= numberOfImages.length){
		images =0;

	}
	slider.URL = numberOfImages[images];

}
function prevbutton(){
	let slider = document.getElementById("slider");
	images--;
	if(images > 0){
		images= numberOfImages.length-1;
	}
	slider.URL =numberOfImages[images]
}