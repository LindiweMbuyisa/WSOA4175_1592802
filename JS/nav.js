
let hamburgerToggle = document.getElementsByClassName('hamburger-toggle')[0]
let links = document.getElementsByClassName('links')[0]

hamburgerToggle.addEventListener('click', () => {
	links.classList.toggle('active')
});


/*document.addEventListener('DOMContentLoaded', () => createNav());

let navBar= [

{title: 'About', link: 'About.html'},
{title: 'Blog', link: 'Blog.html'},
{title: 'Creative Projects', link: 'Creative.html'},
{title: 'Lindiwe:)', link:'index.html'},



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
};*/

