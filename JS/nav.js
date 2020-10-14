document.addEventListener('DOMContentLoaded', () => createNav());

let navBar= [
{title: 'Home', link:'index.html'},
{title: 'About', link: 'About.html'},
{title: 'Blog', link: 'Blog.html'},
{title: 'Creative Projects', link: 'Creative.html'},



];


let createNav = () => {
let nav = document.querySelector('nav');
 let ul = document.createElement('ul');
 for (let item of navBar){

 	let li = document.createElement('li');
 	let a = document.createElement('a');
 	a.innerText =item.title;
 	a.href =item.link;
 	li.appendChild(a);
 	ul.appendChild(li);
 }

 nav.appendChild(ul);
};

/*
let hamburger = document.getElementById('hamburger');

let navul = document.getElementById('nav');
hamburger.addEventListener('click', () => {
	navul.classList.toggle('dropdownnav');
});*/