//Back Button
function Back(){
	window.history.back();
};
function Next(){
	window.history.forward();
};

let btnScrollToTop = document.querySelector(".btnScrollToTop");
window.addEventListener("scroll", () =>{
	if(window.pageYOffset > 80) {
		btnScrollToTop.classList.add("active");
	}
	else{
		btnScrollToTop.classList.remove("active");
	}


});


/*let pages =["One.html", "Two.html", "Three.html", "Four.html", "Five.html", "Six.html", "Seven.html", "Eight.html", "Nine.html", "Ten.html", "Eleven.html", "Twelve.html"];
function Next(){
	let hr = window.location.href.splitOnLast("/");
	let page = hr[1].replace("/", "");
	let nextIndex =pages.indexOf(page) +1;
	if(nextIndex >pages.length)
		nextIndex =0;
	let redirect = hr[0] +"/" +pages[nextIndex];
	window.location.href =redirect;
}
function Prev(){
	let hr = window.location.href.splitOnLast("/");
	let page = hr[1].replace("/", "");
	let nextIndex =pages.indexOf(page) -1;
	if(nextIndex < 0)
		nextIndex = pages.length -1;
	let redirect = hr[0] +"/" +pages[nextIndex];
	window.location.href =redirect;
};*/


/*Previous and next button
let numberOfPages;
let pages = 0;
function Next(){
	let slider = document.getElementsById("slider");
	pages++;
	if(pages >= numberOfPages.length){
		pages =0;

	}
	slider.href = numberOfPages[pages];

}
function Prev(){
	let slider = document.getElementsById("slider");
	pages--;
	if(pages > 0){
		pages= numberOfPages.length-1;
	}
	slider.href =numberOfPages[pages]
};*/